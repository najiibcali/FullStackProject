import { Link } from "react-router-dom"
import Header from "../Components/Header"

function About () {
    return <>
    <Header/>
     <div  className="bg-cover bg-center h-[800px] w-full relative"
  style={{ backgroundImage: "url('https://i.pinimg.com/1200x/d2/ef/1c/d2ef1c168d5e0677554e924b19216dfb.jpg')" }}>
    <div className="absolute text-white ml-20 text-center bottom-80 left-[350px]">
        <h1 className="text-6xl font-semibold  ">About Us</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsa.</p>
    </div>
    </div>

     <div className="flex justify-around mt-20 h-[60vh] anim1 ">
        <div className="w-[50%]">
            <h1 className="text-4xl font-thin mb-8 text-gray-500">Moto Company</h1>
            <p className="text-xl text-gray-500 w-[90%] space-y-10">
              Shirkadda Meto Rent waa shirkad Soomaaliyeed oo ku takhasustay kirada mootooyinka iyo gaadiidka casriga ah. Waxaa la aasaasay si loo fududeeyo safarka iyo dhaq-dhaqaaqa macaamiisha, iyadoo la siinayo adeeg ammaan ah, raaxo leh, iyo qiimo macquul ah.</p>
            <button className="bg-orange-500 h-11 rounded-xl mt-10 text-white text-2xl w-40">Learn More</button>
        </div>

        <div className="anim2">
            <img className="w-[550px] h-[300px] rounded-2xl" src="https://i.pinimg.com/1200x/3d/c7/56/3dc756fbe39d2c394128f83f0cf5b8e5.jpg" alt="" />
        </div>
    </div>


    
    <div className="flex justify-around">
    <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-28" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="" />
        <h1 className="text-yellow-300 ml-[120px]">Owner</h1>
        <h1 className="text-2xl ml-[95px]">Najiiib Ali</h1>
        <p className="ml-4">Mas’uul ka ah maamulka guud, go’aamada, iyo xiriirka shirkadda..</p>
    </div>
     <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-28" src="https://i.pinimg.com/1200x/4b/3b/c6/4b3bc6aae255bef0e86cbd14f4aa4b86.jpg" alt="" />
        <h1 className="text-yellow-300 ml-[100px]">Customer Service</h1>
        <h1 className="text-2xl ml-[95px]">Jamal Xasan</h1>
        <p className="ml-4 w-72">Qabta wicitaanada, diiwaan geliya macaamiisha, iyo bixiya adeeg macmiil.</p>
    </div>
     <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-28" src="https://preview.colorlib.com/theme/carrent/images/person_3.jpg.webp" alt="" />
        <h1 className="text-orange-300 ml-[120px]">Mechanic</h1>
        <h1 className="text-2xl ml-[95px]">Sacdiyo Mahad</h1>
        <p className="ml-4 w-72">Hubiya dayactirka mootooyinka si joogto ahna u ilaaliya xaaladooda.</p>
    </div>
    </div>

    <div className="">
       <div className="flex justify-around mt-40">
    <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-28" src="https://i.pinimg.com/736x/26/bb/39/26bb3934ba07ea02c24717194e8bece5.jpg" alt="" />
        <h1 className="text-yellow-300 ml-[120px]">Cleaner</h1>
        <h1 className="text-2xl ml-20">Salmo Jamac</h1>
        <p className="ml-4 text-center w-72">Nadiifinta xafiisyada, kuraasta, miisaska, iyo qolalka shaqaalaha.</p>
    </div>
     <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-28" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="" />
        <h1 className="text-yellow-300 ml-[120px]">Accountant</h1>
        <h1 className="text-2xl ml-[95px]">James Doe</h1>
        <p className="ml-4 w-72">Ka shaqeeya lacagta, xisaabaadka iyo maaliyadda shirkadda.</p>
    </div>
     <div className="bg-white w-80 h-60">
        <img className="w-20 h-20 rounded-full ml-24" src="https://i.pinimg.com/736x/e8/49/9c/e8499c563881a7bb7797fd48d834b503.jpg" alt="" />
        <h1 className="text-yellow-300 ml-24">Marketing</h1>
        <h1 className="text-2xl ml-20 ">Sacdiyo Salax </h1>
        <p className="ml-4 w-72">isticmaasho si aad dadka u gaarsiiso magaca shirkaddaada, .</p>
    </div>
    </div>
    </div>

    
     <div className="flex justify-between h-[80vh]">
            <div className="w-[60%]">
                <img className="w-[600px] h-[310px] rounded-2xl ml-20 mt-20" src="https://i.pinimg.com/736x/4b/28/82/4b2882d963007822be109672cd71043c.jpg" alt="" />
            </div>

            <div className="w-[40%] mt-20 ">
                <h1 className="text-4xl font-thin text-gray-500 mb-5">Our History</h1>
                <p className="text-xl text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.
                   Debitis voluptates corporis saepe molestias tenetur ab quae, quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?</p>
                   <Link to="/Historey">
                   <button className="bg-orange-500 h-11 rounded-xl mt-10 text-white text-2xl w-40">Learn More</button>
                   </Link>
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
        by <a href="https://colorlib.com" className="text-white hover:underline">Meto Rent</a>
      </div>
    </footer>

      </div>

    </>
}
export default About