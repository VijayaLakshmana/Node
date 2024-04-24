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

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
  console.log(req.params)
})

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
    console.log("hi")
  })
  .put((req, res) => {
    res.send('Update the book')
  })

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])
