// import axios from "axios"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Login(){
//     const [UserName,setUserName] = useState("")
//     const [Password,setPassword] = useState("")

//     const navigate = useNavigate()
//     const HandleLogin= (e)=>{
//         e.preventDefault()
//         axios.post("http://localhost:3000/Login/User",{
//             "UserName": UserName,
//             "Password": Password
//         }).then((res) => {
//             if(res.data.error){
//                 alert('incroct password or usarname')
//             }
//             else{
//                 alert("Success Login")
//                 navigate("/")
//                 localStorage.setItem("admin",JSON.stringify(res.data))
//             }
//         })
//     }
//     return <>
//     <h1>Login</h1>
//     <form className="bg-blue-500 w-[30%] h-80 rounded-lg p-10">
//         <input value={UserName} onChange={(e)=>setUserName(e.target.value)} className="w-80 h-10  pl-3 rounded-lg"type="text" placeholder="Enter User name" /> <br /> <br />
//         <input value={Password} onChange={(e)=>setPassword(e.target.value)} className="w-80 h-10  pl-3 rounded-lg"type="password" name="" id="" placeholder="Enter password"/> <br /> <br />
//         <button onClick={HandleLogin} className="bg-white px-14 py-3 text-black  ml-20">Login</button>
//     </form>
//     </>
// }
// export default Login