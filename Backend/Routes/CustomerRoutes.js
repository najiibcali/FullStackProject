const express = require("express")
const customerController =require("../Controllers/CustomerControll")
const router= express.Router()

router.post("/create/customer",customerController.CreateCustomer)
router.post("/Login/customer",customerController.CustomerLogin)
router.get("/Read/customer",customerController.ReadCustomer)
router.delete("/delete/Customer/:id",customerController.deleteCustomer)
module.exports= router