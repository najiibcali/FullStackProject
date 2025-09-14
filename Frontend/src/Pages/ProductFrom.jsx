import axios from "axios"
import { useState } from "react"
// import { toast } from "react-toastify"


function ProductFrom() {
  const [name,setname] = useState("")
  const [Qauntity,setQauntity] = useState("")
  const [prImage,setprImage] = useState("")
  const [price,setPrice] = useState("")
  const [category,setcategory] = useState("")
  const formData = new FormData()

  formData.append("name", name)
  formData.append("Qauntity", Qauntity)
  formData.append("price", price)
  formData.append("category", category)
  formData.append("img", prImage)
  


  const hanldePost = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/create/product", formData).then(() => {
     alert("succes full", {
        position: "top-right",
        autoClose: true,
      })
    })
  }


  return (
    <form
      action="/submit-book"
      method="POST"
      encType="multipart/form-data"
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
        Register a Book
      </h2>

      <div>
        <label className="block mb-1 font-medium">product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          name="bookName"
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Qauntity</label>
        <input
          type="text"
          name="author"
          value={Qauntity}
          onChange={(e) => setQauntity(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Price ($)</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>


         <div>
        <label className="block mb-1 font-medium">category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      

      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          
          onChange={(e) =>  setprImage(e.target.files[0])}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <button
      onClick={hanldePost}
        type="submit"
        className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      >
        Register Book
      </button>
    </form>
  );
}

export default ProductFrom;
