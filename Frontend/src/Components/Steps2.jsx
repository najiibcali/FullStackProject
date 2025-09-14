const cardData = [
    {
      img: "https://i.pinimg.com/1200x/82/04/87/82048711d976f2d8b600762e3f9219d2.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
    {
      img: "https://i.pinimg.com/736x/be/87/55/be87550c8453ac94ade9d7e8d0f73fbf.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
    {
      img: "https://i.pinimg.com/1200x/da/39/1a/da391a9e6e132e7025ab341f4074ebd0.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
    {
      img: "https://i.pinimg.com/736x/5b/2d/21/5b2d215ec2861a5412b701632452d61b.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
    {
      img: "https://i.pinimg.com/736x/11/2f/16/112f16868b279a1751927ea3f433ccac.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
    {
      img: "https://i.pinimg.com/1200x/d2/ef/1c/d2ef1c168d5e0677554e924b19216dfb.jpg",
      title: "The best Moto rent in the entire planet",
      date: "July 17, 2019",
      author: "Admin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    },
  ];

function Steps2 () {
    return <>
     <div className="py-20 px-10 bg-white mt-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            <img src={card.img} alt="car" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {card.date} &nbsp; by <span className="text-blue-600">{card.author}</span>
              </p>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
}
export default Steps2