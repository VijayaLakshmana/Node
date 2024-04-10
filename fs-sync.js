const {readFileSync, writeFileSync}=require('fs')
const first=readFileSync('./component/first.txt','utf8')
const second=readFileSync('./component/second.txt','utf8')
writeFileSync('./component/third.txt', `Here the data:${first}, ${second}`)

