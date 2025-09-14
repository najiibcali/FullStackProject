const express = require("express")
const CodsiController =require("../Controllers/CodsiConttroller")
const router= express.Router()

router.post("/create/customerCodsi",CodsiController.createCodsi)
router.get("/Read/customerCodsi",CodsiController.getAllCodsi)
router.delete("/delete/Customer/:id",CodsiController.deleteCodsi)
module.exports= router