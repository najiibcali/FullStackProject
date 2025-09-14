import Header from "../Components/Header"
import imgone from "../assets/a1c6be8666b6f4b22cadfa81ae29411e-removebg-preview.png"
import imgtwo from "../assets/Banner Image.png"
import Steps from "../Components/Steps"
import Steps2 from "../Components/Steps2"
import { Link } from "react-router-dom"
function Home () {
    return <>
    <Header/>
    <div className="flex justify-around mt-32">
        <div className="ml-28 anim1">
            <h1 className="text-slate-500 text-4xl">AutoNest Moto Rent</h1>
            <p className="text-black w-[380px] mt-10">ku soo dhawaw Meto Go waxa sheqynaa 24/7  !</p>
            <div className="flex gap-24 mt-10 ">
                <div className="gap-10">
                    <h1 className="text-5xl">50+</h1>
                    <p className="text-2xl">Moto brands</p>
                </div>
                <div className="gap-10">
                    <h1 className="text-5xl">10k+</h1>
                    <p className="text-2xl">cilents</p>
                </div>
            </div>
        </div>
        <div className="anim2">
            <img src={imgone} alt="" />
        </div>
    </div>

    <div>
        <Steps2/>
    </div>

    <div>
        <Steps/>
    </div>

<div className="h-96 bg-cover bg-center flex items-center justify-center mt-20"
      style={{ backgroundImage: `url(${imgtwo})` }}  >
        <div className="ml-[500px]">
      <h1 className="text-white text-4xl ml-28"> Moto News</h1>
      <p className="w-[400px] text-white mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis, dignissimos nostrum consequatur in culpa.</p>
      <div className="mt-10">
        <Link to="/register">
        <button className="bg-white h-10 w-36 rounded-lg text-black text-2xl">Regesiter</button>
        </Link>
      </div>
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
        Copyright ©2025 All rights reserved | Najiib Ali 
        <span className="text-red-500 px-1">❤</span> 
      </div>
    </footer>

      </div>
    </>
}
export default Home