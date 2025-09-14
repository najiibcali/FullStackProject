const CustomerModel = require ("../Model/CustomerModel")
const bcrypt = require("bcryptjs")


const CreateCustomer = async (req,res)=>{
    try {
        const {name,email,phone,address,password}= req.body
        
        //check email
        const checkemail = await CustomerModel.findOne({email})
        if(checkemail){
           return res.status(500).send({error:"this email already is register"})
        }

        //hash password

        const hashPassword = await bcrypt.hash(password,10)
        const newData = new CustomerModel ({
            name,
            email,
            phone,
            address,
            password: hashPassword
        })
        const SaveData = await newData.save()
        if(SaveData){
            return res.send(SaveData)
        }
    } catch (error) {
        res.status(400).json({error:"server error"})
    }
}

const CustomerLogin = async (req,res)=>{
    try {
        const {email,password}=req.body

        const checkemail = await CustomerModel.findOne({email})
        if(!checkemail){
           return res.status(400).send({error:"invild email "})
        }

        const checkPassword = await bcrypt.compare(password,checkemail.password)
        if(!checkPassword){
            return res.status(400).send({error:"invild  password"})
        }

        res.send({
            massage: "login",
            customer:{
                name: checkemail.name,
                email:checkemail.email,
                phone:checkemail.phone,
                address:checkemail.address
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"server error"})
    }
}

const ReadCustomer = async (req,res)=>{
    const getCustomer = await CustomerModel.find().select("-password")
    if (getCustomer){
        res.send(getCustomer)
    }
}
const deleteCustomer = async(req,res)=>{
    const removeProduct = await ProductModel.deleteOne({_id: req.params.id})
    if(removeProduct){
        res.send(removeProduct)
    }
}
module.exports = {CreateCustomer,CustomerLogin,ReadCustomer,deleteCustomer}