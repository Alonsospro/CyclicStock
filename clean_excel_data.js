const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function cleanExcelFiles() {
  const dataDir = path.join(__dirname, 'data');
  const excelFiles = [
    path.join(dataDir, 'CICLICOS NIBOL MULTIMARCAS.xlsx'),
    path.join(dataDir, 'inventario_muestra.xlsx')
  ];

  for (const file of excelFiles) {
    if (!fs.existsSync(file)) continue;
    console.log(`Procesando archivo Excel: ${path.basename(file)}...`);
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(file);

    let totalRowsReset = 0;
    wb.worksheets.forEach(ws => {
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
}

cleanExcelFiles()
  .then(() => console.log('✔ Archivos Excel limpiados exitosamente.'))
  .catch(err => console.error('Error al limpiar Excel:', err));
