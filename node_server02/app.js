const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')()
const router = require('./router')

app.use(cors)
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)

app.use((req, res, next) => {
  res.status = 404
  next(Error('not found'))
})
  
app.use((err, req, res, next) => {
console.log(err)
res.status(res.statusCode || 500)
res.json({ error: err.message || 'internal server error' })
})

app.listen(3000, () => {
    console.log("3000port 대기중!")
});