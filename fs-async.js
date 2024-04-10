const {readFile,writeFile}=require('fs')
readFile('./component/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./component/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./component/async.txt',`Here the text:${first} and ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        }
    )
    })
})



