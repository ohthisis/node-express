import express, { Request, Response } from "express"
import dotenv from "dotenv";
dotenv.config();
const app=express()
const port=3000

const apiurl=process.env.API_URL;
console.log(apiurl);
app.use(express.static('public'))

const html=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

      <script type="text/javascript">
      localStorage.setItem('apiurl','${apiurl}')
      window.location.href="/"
      </script>
</body>
</html>
`

app.get("/api",(req:Request,res:Response)=>{
    res.send(html)
})
app.get("/users",(req:Request,res:Response)=>{
    res.send({name:"hla hla",email:"hla@gmail.com,age:20"});
})
app.listen(3000,()=>{
    console.log(`server listen in port ${port}`)
})