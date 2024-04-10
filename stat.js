const fs=require('fs')
fs.stat('./component/first.txt',(err,stats)=>{
   if(err){
    console.log(err)
   }
   console.log(stats)
})


fs.open('./component/first.txt', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File opened successfully with file descriptor:', fd);
    
});

fs.open('./component/second.txt', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File opened successfully with file descriptor2:', fd);
    
});