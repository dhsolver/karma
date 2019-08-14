const path = require('path');

const rootPath = path.resolve(__dirname, '../', '../');
const srcPath = path.resolve(rootPath, 'src');

module.exports = {
  root: rootPath,
  outputPath: path.resolve(rootPath, 'build'),
  entryPath: ['@babel/polyfill', path.resolve(srcPath, 'index.js')],
  templatePath: path.resolve(srcPath, 'index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
