const fs = require('fs')

const extensions = ['.png', '.jpg', '.jpeg', '.json', '.svg']

const readFiles = (path) => {
  const array = fs
    .readdirSync(path)
    .filter((file) => {
      const dot = file.lastIndexOf('.')
      const ext = file.slice(dot, file.length)

      return extensions.includes(ext.toLowerCase())
    })
    .map((fileNameFilter) =>
      fileNameFilter.replace('@2x', '').replace('@3x', ''),
    )

  return Array.from(new Set(array))
}

const writeFile = (path) => {
  const properties = readFiles(path)
    .map((file) => {
      const dot = file.lastIndexOf('.')
      const ext = file.slice(dot, file.length)
      const name = file.slice(0, dot)
      const key = name.replace(/-/g, '_')

      return `  ${key}: require('./${name}${ext}')`
    })
    .join(',\n')
  const string = `export default {${
    properties ? `\n${properties},\n}` : '}'
  };\n`

  fs.writeFileSync(`${path}/index.ts`, string, 'utf8')
}

const execute = () => {
  writeFile('src/assets/icons')
  writeFile('src/assets/images')
  writeFile('libs/assets/icons')
  writeFile('libs/assets/images')
}

execute()
