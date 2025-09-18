import Header from "../Components/Header"
import imgone from "../assets/a1c6be8666b6f4b22cadfa81ae29411e-removebg-preview.png"
import imgtwo from "../assets/Banner Image.png"
import Steps from "../Components/Steps"
import Steps2 from "../Components/Steps2"
import { Link } from "react-router-dom"

function Home () {
  return <>
    <Header/>

    {/* Hero Section */}
    <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-16 md:mt-32 px-4 md:px-20">
        <div className="text-center md:text-left anim1 md:ml-0">
            <h1 className="text-slate-500 text-3xl md:text-4xl font-bold">AutoNest Moto Rent</h1>
            <p className="text-black w-full md:w-[380px] mt-6 md:mt-10">ku soo dhawaw Meto Go waxa sheqynaa 24/7!</p>
            <div className="flex flex-col sm:flex-row gap-8 md:gap-24 mt-6 md:mt-10 justify-center md:justify-start">
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h1 className="text-4xl sm:text-5xl font-bold">50+</h1>
                    <p className="text-xl sm:text-2xl">Moto brands</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h1 className="text-4xl sm:text-5xl font-bold">10k+</h1>
                    <p className="text-xl sm:text-2xl">Clients</p>
                </div>
            </div>
        </div>
        <div className="anim2 mb-10 md:mb-0">
            <img src={imgone} alt="Moto" className="w-72 sm:w-96 md:w-auto"/>
        </div>
    </div>

    {/* Steps Sections */}
    <div className="px-4 md:px-20">
        <Steps2/>
        <Steps/>
    </div>

    {/* Banner Section */}
    <div className="h-80 md:h-96 bg-cover bg-center flex items-center justify-center mt-12 md:mt-20 px-4 md:px-0"
        style={{ backgroundImage: `url(${imgtwo})` }} >
        <div className="text-center md:text-left md:ml-[500px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Moto News</h1>
            <p className="w-full sm:w-[400px] text-white mt-4 sm:mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis, dignissimos nostrum consequatur in culpa.</p>
            <div className="mt-4 sm:mt-6">
                <Link to="/register">
                    <button className="bg-white h-10 w-32 sm:w-36 rounded-lg text-black text-base sm:text-2xl">Register</button>
                </Link>
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
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                {/* Quick Links */}
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
                Copyright ©2025 All rights reserved | Najiib Ali 
                <span className="text-red-500 px-1">❤</span> 
            </div>
        </footer>
    </div>
  </>
}

export default Home
