const express=require ('express')
const usersRouter=express.Router()

const users=[
    {name:"hla hla",email:"hla@gmail.com",age:20},
    {name:"hla hla",email:"hla@gmail.com",age:20},
    {name:"hla hla",email:"hla@gmail.com",age:20},
]

usersRouter.get('/', (req, res) => {
    res.send(users)
  })

module.exports = usersRouter