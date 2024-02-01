const express = require('express')
const router = express.Router()

const birds=[
  {bird:"amber"},
  {birds:"kiwi"}
]
// middleware that is specific to this router

// define the home page route
router.get('/', (req, res) => {
  res.send(birds)
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
router.post('/lists', (req, res) => {
  res.send('About list birds')
  res.send(list_birds)
})


module.exports = router
