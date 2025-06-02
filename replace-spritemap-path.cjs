const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const assetsDir = path.join(distDir, 'assets');

// 1. Находим имя файла спрайта с хэшем
const spritemapFile = fs.readdirSync(assetsDir).find(f => f.startsWith('spritemap') && f.endsWith('.svg'));
if (!spritemapFile) {
  console.error('SVG spritemap not found in dist/assets!');
  process.exit(1);
}

// 2. Читаем index.html
const indexPath = path.join(distDir, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 3. Делаем замену всех __spritemap на правильный путь
const spritemapPath = `assets/${spritemapFile}`;
html = html.replace(/__spritemap#/g, `${spritemapPath}#`);

// 4. Сохраняем результат
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Spritemap path replaced successfully!');