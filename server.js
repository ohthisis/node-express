const express = require('express')
const birdRouter = require('./routes/birdrouter')
const userRouter = require('./routes/useritem')

const app = express()
const port = 3000

app.use(express.static("public"))
// framework
app.set('view engine', 'pug')

app.get('/profile', (req, res) => {
  // connect to database and input data
  res.render('profile', { title: 'Hey', message: 'Hello there!' })
})
app.get('/avatar',(req,res)=>{
  res.sendFile(`${__dirname}/flower.png`);
})

app.use("/birds",birdRouter)
app.use("/users",userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})