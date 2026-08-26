const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

console.log('1. Limpiando assignments.json...');
fs.writeFileSync(path.join(dataDir, 'assignments.json'), JSON.stringify({ assignments: {}, history: [] }, null, 2), 'utf8');
console.log('✔ assignments.json limpio.');

console.log('2. Limpiando audit_counts.json...');
fs.writeFileSync(path.join(dataDir, 'audit_counts.json'), JSON.stringify({ logs: [] }, null, 2), 'utf8');
console.log('✔ audit_counts.json limpio.');

console.log('3. Limpiando justifications.json...');
fs.writeFileSync(path.join(dataDir, 'justifications.json'), JSON.stringify([], null, 2), 'utf8');
console.log('✔ justifications.json limpio.');

console.log('4. Limpiando fotos y respaldos gráficos en data/uploads/ ...');
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
console.log('✔ data/uploads/ limpio.');

console.log('5. Limpiando usuarios en data/users.json...');
const usersPath = path.join(dataDir, 'users.json');
if (fs.existsSync(usersPath)) {
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  users.forEach(u => {
    u.ultimoAcceso = null;
  });
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), 'utf8');
  console.log(`✔ users.json limpio (${users.length} usuarios actualizados con ultimoAcceso: null).`);
}

console.log('6. Limpiando config.json...');
const configPath = path.join(dataDir, 'config.json');
if (fs.existsSync(configPath)) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  config.operatorName = '';
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
  console.log('✔ config.json limpio.');
}
