
const express = require("express")
const ProductControllers = require("../Controllers/ProductControllers")
const router = express.Router()
const UploadImage = require("../Middleware/UploadImage")
router.post("/create/product",UploadImage.single("img"),ProductControllers.createProduct)
router.post("/read/product",ProductControllers.readProduct)
router.get("/readSingle/product/:id",ProductControllers.readProductsingle)
router.put("/update/product/:id",UploadImage.single("img"),ProductControllers.updateProduct)
router.delete("/delete/product/:id",ProductControllers.deleteProduct)
module.exports= router