import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router'
import Header from "../Components/Header"
function CustomerLogin() {
  const [email, setemail] = useState("");
   const [password, setpassword] = useState("")

  const navigate = useNavigate()

  const handleInsert = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3000/Login/customer", {
      email,
      password
    }).then((res)=>{
    localStorage.setItem("customer", JSON.stringify(res));
    toast.success("Login successfully");
    navigate("/");
    })
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.error); // invalid email or password
    } else {
      toast.error("Server error");
    }
  }
};
  return <>
  <Header/>
    <form className="max-w-md mx-auto p-6 bg-white mt-12 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Customer Login
      </h2>

      <div>
        <label className="block mb-1 font-medium">Gmail</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded p-2"
          required
           value={email}
          onChange={(e) => setemail(e.target.value)}
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
        Login Customer
      </button>
    </form>
  </>
}

export default CustomerLogin;
