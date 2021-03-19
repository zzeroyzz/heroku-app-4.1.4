const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.user(express.json())

app.use("/api/*",(_,res) =>{
    res.json({data: "The api lives!!"})
})

app.listen(port, () =>{
    console.log(`server is alive on port ${port}`)
})






console.log("It's alive")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
///.USERNAME FOR WINDOWS
console.log(process.env.PORT)
console.log(dotenv)