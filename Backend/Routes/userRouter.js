const express = require("express")
const UserController =require("../Controllers/UserController")
const router= express.Router()

router.post("/create/User",UserController.CreateUser)
router.post("/Login/User",UserController.UserLogin)
module.exports= router