import { useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [Codsi, setCodsi] = useState("");

  const navigate = useNavigate();

  function handleInsert(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create/customerCodsi", {
        name: Name,
        email: email,
        address: address,
        Codsi: Codsi,
      })
      .then((res) => {
        navigate("/");
        toast.success("Registered successfully");
      })
      .catch((error) => {
        if (error.res) {
          toast.error(error.res.error);
        } else {
          toast.error("Server error");
        }
      });
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6f/d4/86/6fd4867ebd3b2ba145144efe7d3f8d06.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            We'd love to hear from you! Get in touch with us for any questions
            or feedback.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="p-6 md:p-20 bg-gray-100 text-center">
        <h1 className="text-2xl md:text-4xl text-gray-600 mb-4 md:mb-8">
          Contact Us Or Use This Form To Rent A Car
        </h1>
        <p className="mx-auto w-full sm:w-3/4 md:w-3/5 text-gray-400 text-base md:text-xl font-thin">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          assumenda, dolorum necessitatibus eius earum voluptates sed!
        </p>
      </div>

      {/* Form & Contact Info */}
      <div className="flex flex-col lg:flex-row px-4 md:px-20 mt-10 gap-10">
        {/* Form */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 h-12 border-2 rounded-lg pl-4 outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-1 h-12 border-2 rounded-lg pl-4 outline-none"
              type="text"
              placeholder="Address"
            />
          </div>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full h-12 mt-3 rounded-lg border-2 pl-4 outline-none"
            type="email"
            placeholder="Enter Email"
          />
          <textarea
            value={Codsi}
            onChange={(e) => setCodsi(e.target.value)}
            className="w-full h-64 mt-3 rounded-lg border-2 p-4 outline-none"
            placeholder="Enter Your Message"
          ></textarea>
          <button
            onClick={(e) => handleInsert(e)}
            className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg mt-4"
          >
            Submit
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Info</h1>
          <div className="mb-4">
            <h2 className="font-semibold">Address:</h2>
            <p className="text-gray-400 font-thin">
              34 Street Name, City Name Here, United States
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Phone:</h2>
            <p className="text-gray-400 font-thin">+1 242 4942 290</p>
          </div>
          <div>
            <h2 className="font-semibold">Email:</h2>
            <p className="text-gray-400 font-thin text-xl">
              info@yourdomain.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 md:mt-36 px-4 md:px-6">
        <footer className="bg-black text-white pt-10 pb-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            {/* About Us */}
            <div>
              <h3 className="text-white font-bold mb-3">About Us</h3>
              <p className="text-gray-400 leading-relaxed">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            {/* Quick Links */}
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx}>
                <h3 className="text-white font-bold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 text-gray-400 text-sm border-t border-gray-700 pt-4">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <span className="text-red-500 px-1">❤</span> by{" "}
            <a
              href="https://colorlib.com"
              className="text-white hover:underline"
            >
              Colorlib
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;
