const excelService = require('./services/excelService');
const path = require('path');

async function regenerateCleanFiles() {
  const dataDir = path.join(__dirname, 'data');
  const file1 = path.join(dataDir, 'CICLICOS NIBOL MULTIMARCAS.xlsx');
  const file2 = path.join(dataDir, 'inventario_muestra.xlsx');

  console.log('Generando archivo limpio: CICLICOS NIBOL MULTIMARCAS.xlsx ...');
  await excelService.createSampleInventoryExcel(file1);
  console.log('✔ CICLICOS NIBOL MULTIMARCAS.xlsx generado con las 13 pestañas de centros completamente limpias.');

  console.log('Generando archivo limpio: inventario_muestra.xlsx ...');
  await excelService.createSampleInventoryExcel(file2);
  console.log('✔ inventario_muestra.xlsx generado con las 13 pestañas de centros completamente limpias.');
}

regenerateCleanFiles()
  .then(() => console.log('✔ Todos los archivos Excel locales han sido regenerados en estado 100% limpio.'))
  .catch(err => console.error('Error:', err));
