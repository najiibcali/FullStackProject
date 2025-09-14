
const mongoose=require("mongoose")

const CustCodsiSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Codsi:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Codsi",CustCodsiSchema)