
const multer = require("multer")

const storeimage = multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,"document")
    },
    filename:(req,file,cb)=>{
    cb(null,file.originalname)
    }
})

const UploadImage = multer({
    storage: storeimage
})

module.exports= UploadImage