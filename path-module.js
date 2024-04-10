const path=require('path')

const filePath=path.join('component','file','app.js')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)
const absolute=path.resolve(__dirname,'component','file','app.js')
console.log(absolute)
console.log(path.extname(absolute))