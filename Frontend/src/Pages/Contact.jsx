import { useState } from "react";
import Header from "../Components/Header"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Contact () {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("")
  const [Codsi,setCodsi] = useState("")

  const navigate = useNavigate()
  function handleInsert (e) {
    e.preventDefault()
    axios.post("http://localhost:3000/create/customerCodsi",{
        name:Name,
        email:email,
        address:address,
        Codsi: Codsi
        
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
     <div
      className="h-[600px] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/6f/d4/86/6fd4867ebd3b2ba145144efe7d3f8d06.jpg')",
      }}
    >
      {/* Overlay madow khafiif ah */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          We'd love to hear from you! Get in touch with us for any questions or feedback.
        </p>
      </div>
    </div>


    <div className="p-20 h-300vh bg-gray-100">
   <div className="text-center">
     <h1 className="text-4xl text-gray-600 mb-8">Contact Us Or Use This Form To Rent A Car</h1>
     <p className="w-[60%] ml-[20%] text-xl text-gray-400 font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
    </div>
    </div>

  <div className="flex">
      <div className="w-[90%]">
        <div className="flex mt-20">
            <input  value={Name}
          onChange={(e) => setName(e.target.value)} className="w-72 h-12 ml-20 border-2  rounded-lg pl-4 outline-none" type="text" placeholder=" Name"/>  
            <input  value={address}
          onChange={(e) => setAddress(e.target.value)} className="w-72 h-12 ml-10 border-2  rounded-lg pl-4 outline-none" type="email" placeholder="address"/>
        </div>
      <input  value={email}
          onChange={(e) => setemail(e.target.value)} className="ml-[84px] w-[86%] h-12 mt-3 rounded-lg border-2" type="text" placeholder="Enter Email" id="" /><br />
      <textarea  value={Codsi}
          onChange={(e) => setCodsi(e.target.value)} className="w-[86%] ml-[84px] h-[260px] mt-3" placeholder="Enter Your Massage"></textarea>
     <button onClick={(e) => handleInsert(e)} className="px-36 py-4 rounded-sm bg-blue-500 text-white ml-[84px] mt-10">Submit</button>
     </div>

     <div className="bg-white w-[70%] mt-20 h-[380px] p-10 ">
   <h1 className="text-3xl">Contact Info</h1>
   <h1 className="mt-8 mb-1">Address:</h1>
   <h1 className="text-gray-400 font-thin">34 Street Name, City Name Here,</h1>
   <h1 className="text-gray-400 font-thin mb-5">United States</h1>

   <h1>Phone:</h1>
   <h1 className="text-gray-400 font-thin mt-1 mb-8">+1 242 4942 290</h1>

     <h1>Email:</h1>
   <h1 className="text-gray-400 font-thin text-xl">info@yourdomain.com</h1>
     </div>
   </div>

           <div className="mt-36">
        <footer className="bg-black text-white pt-10 pb-4 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

        {/* About Us */}
        <div>
          <h3 className="text-white font-bold mb-3">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Quick Links (4 Columns) */}
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx}>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 text-gray-400 text-sm border-t border-gray-700 pt-4">
        Copyright ©2025 All rights reserved | This template is made with 
        <span className="text-red-500 px-1">❤</span> 
        by <a href="https://colorlib.com" className="text-white hover:underline">Colorlib</a>
      </div>
    </footer>

      </div>
    </>
}
export default Contact