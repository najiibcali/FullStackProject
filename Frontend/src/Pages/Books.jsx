import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

function BookTable() {
  const [books, setBooks] = useState([]);
  const [page,setPage]=useState(0)

  // const handleIncerment=()=>{
  //   if(page <= books.length){
  //   setPage(page +1)
  //   }
  // }
  // const handleDecerment=()=>{
  //   if(page >0){
  //     setPage(page -1)
  //   }
  // }


  function showData() {
    axios.post("http://localhost:3000/read/product")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err));
  }

  // const searchData =(id)=>{
  //   const key = id.target.value
  //   if(key){
  //     axios.get(`http://localhost:7000/search/book/${key}`).then((res)=>{
  //        setBooks(res.data)
  //     })
  //   }
  //   else{
  //     showData()
  //   }
  // }

  const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/delete/product/${id}`).then(()=>{
      alert("succesful delete")
      showData()
    })
  }

  useEffect(() => {
    showData()
  })
  // }, [page]);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Product List</h2>
        <input className="w-80 pl-4 rounded-lg text-2xl" type="search" placeholder="search book..." />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-orange-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Qauntity</th>
            <th className="border p-2">Price </th>
            <th className="border p-2">Catecory</th>
            <th className="border p-2">status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? books.map((book, index) => (
            <tr key={book._id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                <img className="w-20 h-14" src={`http://localhost:3000/allImage/${book.prImage}`} alt="" />
              </td>
              <td className="border p-2">{book.name}</td>
              <td className="border p-2">{book.Qauntity}</td>
              <td className="border p-2">${book.price}</td>
              <td className="border p-2">{book.category}</td>
              <td className="border p-2">{book.status}</td>
              <td className="border p-2 space-x-4">
                <Link to={`/Update/${book._id}`}><i className="fa-solid fa-pen-to-square text-blue-600 cursor-pointer"></i></Link>
                <i onClick={()=>handledelete(book._id)} className="fa-solid fa-trash text-red-600 cursor-pointer"></i>
              </td>
            </tr>
          )):<tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No books found.
              </td>
            </tr>
          }
        </tbody>
      </table>
      <div className="text-2xl absolute bottom-3 right-0">
        <button  className="bg-orange-600 py-4 px-12 text-white ml-4">Prev</button>
        <button   className="bg-orange-600 py-4 px-12 text-white ml-4">next</button>
      </div>
    </div>
  );
}

export default BookTable;
