// const readline = require('readline');



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// rl.question('Why should you use streams? ', answer => {
//   console.log(`Maybe it's ${answer}, maybe it's because they are awesome! :)`);

//   rl.close();
// });



const fs = require('fs');

const inputFilePath = 'second.txt';
const outputFilePath = 'first.txt';


const readStream = fs.createReadStream(inputFilePath,'utf8');
const writeStream = fs.createWriteStream(outputFilePath);

readStream.on('data', (chunk) => {
    readStream.pause(); 
    console.log('Received chunk:', chunk);
    setTimeout(() => {
        readStream.resume(); 
    }, 1000); 
});


readStream.pipe(writeStream);

readStream.on('end', () => {
    console.log('Reading complete.');
});

writeStream.on('finish', () => {
    console.log('Writing complete.');
});
