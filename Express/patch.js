const express=require('express')
const app=express()
const fs=require('fs')
const data=JSON.parse(fs.readFileSync("./data.json",'utf8'));


app.route('/user/:id?')
.get((req,res)=>{
 res.status(200).json(data)
})
.post((req,res)=>{
  let length=data.length
  const obj={
    id:`${length}`,
    name:'bala'
  }
  data.push(obj);
  fs.writeFile("./data.json",JSON.stringify(data),(error)=>{
    res.send("success")
  })
})
.patch((req,res)=>{
  
  let updateData=data.find((el)=>el.id*1===req.params.id*1);
  let index=data.indexOf(updateData);
  req.body=({name:"vijay"})
  Object.assign(updateData, req.body)
  console.log(updateData)
  data[index]=updateData;
  fs.writeFileSync("./data.json",JSON.stringify(data))
  res.send('hello')
})

.delete((req,res)=>{
  let index=data.findIndex((el)=>el.id*1===req.params.id*1);
  data.splice(index,1)
  fs.writeFile("./data.json",JSON.stringify(data),(error)=>{
    res.send("success")
  })
})

app.listen(3000,()=>{
    console.log("server port number 3000")
})

