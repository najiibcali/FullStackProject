const UserModel = require("../Model/User")
const CreateUser = async (req,res)=>{
    const  newData = UserModel(req.body)
    const Savedata = await newData.save()
    if(Savedata){
        res.send(Savedata)
    }
}

const UserLogin = async (req,res)=>{
    const loginUser = await UserModel.find({
        UserName: req.body.UserName,
        Password: req.body.Password
    })
    if(loginUser){
        res.send("success Login")
    }
    else{
        res.send({
            error: "inviled password or userName"
            
        })    
    }
}
module.exports = {CreateUser,UserLogin}