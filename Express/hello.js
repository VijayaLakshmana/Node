const express = require('express')

const app =  express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })
  
  app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})