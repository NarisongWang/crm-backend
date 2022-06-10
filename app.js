const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

//API security
app.use(helmet())

//handle CORS error
app.use(cors())

//logger
app.use(morgan("tiny"))

//set body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT || 3001

//load routers
const userRouter = require("./src/router/user.router")
const ticketRouter = require("./src/router/ticket.router")

//use routers
app.use("/user", userRouter)
app.use("/ticket", ticketRouter)

app.use("*", (req, res)=>{
    res.json({message:"Resources not found!"})
})

app.listen(port, ()=>{
    console.log(`API is ready on http://localhost:${port}`)
})