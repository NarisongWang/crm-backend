const express = require("express")
const router = express.Router()

router.all("/",(req, res, next)=>{
    res.json({message:"this is from user router"})
})

module.exports = router