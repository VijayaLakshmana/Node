// const fs = require('fs/promises');
const fs=require('fs')
const path=require('path')
const folderName = '/home/vijaymuthu/Desktop/node/test';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

const folderPath='./component'
const filePaths=fs.readdirSync(folderPath).map(fileName => {
     return path.join(folderPath, fileName);
  });
  console.log(filePaths)
// async function filePath(){
//     const filePaths= await fs.readdir(folderPath)
//     const file=await filePaths.map(filename=>{
//         return path.join(folderPath, filename);
//     })
//     console.log(file)
// }
// filePath()

