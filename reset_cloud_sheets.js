const fs = require('fs');
const path = require('path');

const CENTROS = ['1300', '1800', '1340', '1820', '1120', '1180', '1700', '1160', '1320', '1310', '5100', '3100', '2100'];

async function resetCloudSheets() {
  const configPath = path.join(__dirname, 'data', 'config.json');
  if (!fs.existsSync(configPath)) {
    console.log('No se encontró config.json.');
    return;
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const urls = config.googleSheetUrls || {};

  console.log('--- RESETEANDO HOJAS DE GOOGLE DRIVE EN LA NUBE ---');

  for (const [type, url] of Object.entries(urls)) {
    if (!url) continue;
    console.log(`\nVerificando conexión con Google Apps Script [${type.toUpperCase()}]...`);
    for (const centro of CENTROS) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'resetCycle',
            centro: centro,
            location: '',
            abcClass: ''
          }),
          redirect: 'follow'
        });
        const text = await response.text();
        try {
          const json = JSON.parse(text);
          if (json.success) {
            console.log(`  ✔ Centro ${centro} reseteado en ${type} (${json.resetCount || 0} filas pendientes).`);
          } else {
            console.log(`  ℹ Centro ${centro} en ${type}: ${json.error || json.message || 'Ok'}`);
          }
        } catch (e) {
          console.log(`  ℹ Centro ${centro} en ${type}: respuesta recibida.`);
        }
      } catch (err) {
        console.warn(`  ⚠ No se pudo conectar con ${type} para Centro ${centro}:`, err.message);
      }
    }
  }

  console.log('\n✔ Proceso de sincronización con Google Sheets completado.');
}

resetCloudSheets();
