import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router'
import Header from "../Components/Header"
function CustomerRegistrationForm() {
  const [CustomerName, setCustomerName] = useState("");
  const [gmail, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("")
   const [password, setpassword] = useState("")

  const navigate = useNavigate()
  function handleInsert (e) {
    e.preventDefault()
    axios.post("http://localhost:3000/create/customer",{
        name:CustomerName,
        email:gmail,
        phone:phone,
        address:address,
        password: password
        
    }).then((res) =>{
        navigate("/")
        toast.success("registered successfully")
    }).catch((error)=>{
      if(error.res){
        toast.error(error.res.error)
      }else{
        toast.error("sever error")
      }
    })
  }
  return <>
  <Header/>
    <form className="max-w-md mx-auto p-6 bg-white mt-12 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Customer Registration
      </h2>

      <div>
        <label className="block mb-1 font-medium">Customer Name</label>
        <input
          type="text"
          value={CustomerName}
          onChange={(e) => setCustomerName(e.target.value)}
          name="customerName"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Gmail</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={gmail}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>


      <div>
        <label className="block mb-1 font-medium">Address</label>
         <input
          type="text"
          name="address"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

       <div>
        <label className="block mb-1 font-medium">password</label>
        <input
          type="password"
          name="password"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      onClick={(e) => handleInsert(e)}
      >
        Register Customer
      </button>
    </form>
  </>
}

export default CustomerRegistrationForm;
