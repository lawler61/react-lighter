const { main, name, author } = require('../package.json')

const outputPath = 'dist'

const entryDir = 'src'

// 必要参数
const baseOptions = {
  entryFile: main,
  templateFile: `${entryDir}/index.tmpl.html`,
  templateTitle: name,
  author,
  cssPath: 'styles',
  purifycssFile: [`${entryDir}/*.html`, `${entryDir}/**/*.js`],
  assetsPath: 'assets',
  moduleToDll: {
    react: ['react', 'react-dom', 'react-router-dom']
  },
  dllFiles: ['react.dll.js', 'react.manifest.json']
}

// 可选参数
const extraOptions = {
  // 是否抽离出 css
  // 选择 true 在开发模式中 react-hot-loader 不能热加载抽离出去的 css
  // 选择 false purifycss-webpack 不能去除无用的 css
  usrCssExtract: true,
  copyConfig: { // 是否有不需要处理，直接拷贝的文件
    needsCopy: true,
    fromPath: `${entryDir}/docs`,
    toPath: `${outputPath}/docs`
  }
}

module.exports = Object.assign( baseOptions, { outputPath, entryDir }, extraOptions)
