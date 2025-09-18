import { Link } from "react-router-dom";
import Header from "../Components/Header";

function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] md:h-[800px] w-full relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/d2/ef/1c/d2ef1c168d5e0677554e924b19216dfb.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:ml-20 text-center md:text-left text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-2">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            ipsa.
          </p>
        </div>
      </div>

      {/* Moto Company Section */}
      <div className="flex flex-col lg:flex-row justify-around mt-10 lg:mt-20 gap-8 px-4 lg:px-20 items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-4 text-gray-500">
            Moto Company
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6">
            Shirkadda Meto Rent waa shirkad Soomaaliyeed oo ku takhasustay kirada
            mootooyinka iyo gaadiidka casriga ah. Waxaa la aasaasay si loo
            fududeeyo safarka iyo dhaq-dhaqaaqa macaamiisha, iyadoo la siinayo
            adeeg ammaan ah, raaxo leh, iyo qiimo macquul ah.
          </p>
          <button className="bg-orange-500 h-11 rounded-xl text-white text-lg sm:text-xl px-6">
            Learn More
          </button>
        </div>

        <div className="lg:w-1/2 anim2">
          <img
            className="w-full max-w-md h-64 md:h-80 rounded-2xl object-cover"
            src="https://i.pinimg.com/1200x/3d/c7/56/3dc756fbe39d2c394128f83f0cf5b8e5.jpg"
            alt="Moto Company"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            img: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            role: "Owner",
            name: "Najiiib Ali",
            desc: "Mas’uul ka ah maamulka guud, go’aamada, iyo xiriirka shirkadda..",
            color: "text-yellow-300",
          },
          {
            img: "https://i.pinimg.com/1200x/4b/3b/c6/4b3bc6aae255bef0e86cbd14f4aa4b86.jpg",
            role: "Customer Service",
            name: "Jamal Xasan",
            desc: "Qabta wicitaanada, diiwaan geliya macaamiisha, iyo bixiya adeeg macmiil.",
            color: "text-yellow-300",
          },
          {
            img: "https://preview.colorlib.com/theme/carrent/images/person_3.jpg.webp",
            role: "Mechanic",
            name: "Sacdiyo Mahad",
            desc: "Hubiya dayactirka mootooyinka si joogto ahna u ilaaliya xaaladooda.",
            color: "text-orange-300",
          },
          {
            img: "https://i.pinimg.com/736x/26/bb/39/26bb3934ba07ea02c24717194e8bece5.jpg",
            role: "Cleaner",
            name: "Salmo Jamac",
            desc: "Nadiifinta xafiisyada, kuraasta, miisaska, iyo qolalka shaqaalaha.",
            color: "text-yellow-300",
          },
          {
            img: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            role: "Accountant",
            name: "James Doe",
            desc: "Ka shaqeeya lacagta, xisaabaadka iyo maaliyadda shirkadda.",
            color: "text-yellow-300",
          },
          {
            img: "https://i.pinimg.com/736x/e8/49/9c/e8499c563881a7bb7797fd48d834b503.jpg",
            role: "Marketing",
            name: "Sacdiyo Salax",
            desc: "Isticmaasho si aad dadka u gaarsiiso magaca shirkaddaada.",
            color: "text-yellow-300",
          },
        ].map((member, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <img
              className="w-20 h-20 rounded-full mb-2 object-cover"
              src={member.img}
              alt={member.name}
            />
            <h1 className={`${member.color} font-semibold`}>{member.role}</h1>
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-gray-500 mt-2 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>

      {/* History Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-20 px-4 lg:px-20 items-center gap-8">
        <div className="lg:w-3/5">
          <img
            className="w-full h-64 md:h-80 rounded-2xl object-cover"
            src="https://i.pinimg.com/736x/4b/28/82/4b2882d963007822be109672cd71043c.jpg"
            alt="History"
          />
        </div>
        <div className="lg:w-2/5">
          <h1 className="text-2xl md:text-4xl font-thin text-gray-500 mb-4">
            Our History
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            suscipit, repudiandae similique accusantium eius nulla quam laudantium
            sequi. Debitis voluptates corporis saepe molestias tenetur ab quae,
            quo earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?
          </p>
          <Link to="/Historey">
            <button className="bg-orange-500 h-11 rounded-xl text-white text-lg sm:text-xl px-6">
              Learn More
            </button>
          </Link>
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
                    <a href="#" className="hover:text-white">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">Contact Us</a>
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
              Meto Rent
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
