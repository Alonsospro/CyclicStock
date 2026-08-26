const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const CENTROS = ['1300', '1800', '1340', '1820', '1120', '1180', '1700', '1160', '1320', '1310', '5100', '3100', '2100'];

async function cleanSystemData() {
  console.log('=== INICIANDO LIMPIEZA COMPLETA DE DATOS DEL SISTEMA ===\n');

  const dataDir = path.join(__dirname, 'data');

  // 1. Limpiar assignments.json
  const assignmentsPath = path.join(dataDir, 'assignments.json');
  fs.writeFileSync(assignmentsPath, JSON.stringify({ assignments: {}, history: [] }, null, 2), 'utf8');
  console.log('✔ [1/7] assignments.json limpiado (tareas activas e historial reseteados).');

  // 2. Limpiar audit_counts.json
  const auditPath = path.join(dataDir, 'audit_counts.json');
  fs.writeFileSync(auditPath, JSON.stringify({ logs: [] }, null, 2), 'utf8');
  console.log('✔ [2/7] audit_counts.json limpiado (registro de auditoría vacío).');

  // 3. Limpiar justifications.json
  const justificationsPath = path.join(dataDir, 'justifications.json');
  fs.writeFileSync(justificationsPath, JSON.stringify([], null, 2), 'utf8');
  console.log('✔ [3/7] justifications.json limpiado (justificaciones vacías).');

  // 4. Limpiar fotos y respaldos gráficos en data/uploads/
  const uploadsDir = path.join(dataDir, 'uploads');
  const fotosRefDir = path.join(uploadsDir, 'fotosreferencias');
  const respaldoDir = path.join(uploadsDir, 'respaldo_grafico');

  function removeFolderContents(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      if (item === '.gitkeep') continue;
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        fs.rmSync(fullPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(fullPath);
      }
    }
  }

  removeFolderContents(fotosRefDir);
  removeFolderContents(respaldoDir);
  console.log('✔ [4/7] data/uploads/ limpiado (fotos y respaldos gráficos eliminados).');

  // 5. Resetear ultimoAcceso en data/users.json
  const usersPath = path.join(dataDir, 'users.json');
  if (fs.existsSync(usersPath)) {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
    users.forEach(u => {
      u.ultimoAcceso = null;
    });
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), 'utf8');
    console.log(`✔ [5/7] data/users.json limpiado (${users.length} usuarios con ultimoAcceso reseteado).`);
  }

  // 6. Resetear config.json
  const configPath = path.join(dataDir, 'config.json');
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    config.operatorName = '';
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
    console.log('✔ [6/7] data/config.json reseteado (operador por defecto en blanco).');
  }

  // 7. Resetear conteos y diferencias en archivos Excel locales
  const excelFiles = [
    path.join(dataDir, 'CICLICOS NIBOL MULTIMARCAS.xlsx'),
    path.join(dataDir, 'inventario_muestra.xlsx')
  ];

  for (const file of excelFiles) {
    if (!fs.existsSync(file)) continue;
    console.log(`\nProcesando archivo Excel: ${path.basename(file)}...`);
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(file);

    let totalRowsReset = 0;
    wb.worksheets.forEach(ws => {
      // Si no es hoja de centro o tiene 1 o menos filas, continuar
      if (ws.rowCount <= 1) return;

      for (let r = 2; r <= ws.rowCount; r++) {
        const row = ws.getRow(r);
        const sku = row.getCell('A').value;
        if (!sku) continue;

        row.getCell('J').value = null; // Stock_Fisico
        row.getCell('K').value = null; // Diferencia
        row.getCell('L').value = null; // Costo_Diferencia
        row.getCell('M').value = null; // Fecha_Ultimo_Conteo
        row.getCell('N').value = null; // Responsable
        row.getCell('O').value = 'Pendiente'; // Estado
        row.getCell('P').value = null; // Mal_Estado
        row.commit();
        totalRowsReset++;
      }
    });

    await wb.xlsx.writeFile(file);
    console.log(`✔ ${path.basename(file)}: ${totalRowsReset} filas reseteadas a estado "Pendiente" con conteo vacío.`);
  }

  // 8. Intentar resetear Google Sheets en la nube si hay conexión
  console.log('\n--- Sincronizando reseteo con Google Sheets Cloud ---');
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const urls = config.googleSheetUrls || {};

    for (const [type, url] of Object.entries(urls)) {
      if (!url) continue;
      console.log(`Reseteando ciclos en Google Sheets [${type}]...`);
      for (const centro of CENTROS) {
        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'resetCycle', centro, location: '', abcClass: '' }),
            redirect: 'follow'
          });
          const json = await res.json();
          if (json.success) {
            console.log(`  ✔ Centro ${centro} reseteado en ${type} (${json.resetCount || 0} filas)`);
          }
        } catch (e) {
          console.log(`  ⚠ Centro ${centro} en ${type}: ${e.message}`);
        }
      }
    }
  }

  console.log('\n=== LIMPIEZA COMPLETA FINALIZADA CON ÉXITO ===');
}

cleanSystemData().catch(err => {
  console.error('Error durante la limpieza:', err);
});
