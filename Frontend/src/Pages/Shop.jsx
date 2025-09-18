import axios from "axios";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  // Add to Cart function
  const handleStoreData = (item) => {
    const Customer = localStorage.getItem("customer");
    if (!Customer) {
      alert("Please login first to add items to the cart");
      navigate("/CustomerLogin");
      return;
    }
    const newData = JSON.parse(localStorage.getItem("product")) || [];
    const existed = newData.some((prd) => prd._id === item._id);
    if (!existed) {
      newData.push({ ...item, Quantity: 1 });
      localStorage.setItem("product", JSON.stringify(newData));
      alert("Added to cart!");
    } else {
      alert("This item is already in your cart!");
    }
  };

  // Fetch products
  useEffect(() => {
    axios
      .post("http://localhost:3000/read/product", { category: category })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

  return (
    <>
      <Header />
      <div className="relative flex justify-end px-4 md:px-20 mt-6">
        <input
          className="w-full sm:w-72 h-12 text-black border px-3 rounded"
          type="text"
          placeholder="Search Your Product"
        />
      </div>

      <div className="flex flex-col lg:flex-row px-4 md:px-20 mt-10 gap-8">
        {/* Category Filter */}
        <div className="flex-shrink-0 bg-white p-4 rounded shadow-md">
          <label className="block mb-2 font-semibold">Filter by Rating</label>
          <div className="flex flex-col gap-1">
            {["5 Star", "4 Star", "3 Star", "2 Star"].map((rate) => (
              <label key={rate} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={rate}
                  onChange={() => setCategory(rate)}
                />
                {rate}
              </label>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-3"
            >
              {/* Product Image */}
              <div className="h-60 w-full overflow-hidden rounded mb-3">
                <img
                  src={`http://localhost:3000/allImage/${item.prImage}`}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title + Status */}
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-sm text-gray-800 leading-snug">
                  {item.name}
                </h2>
                <span
                  className={`text-xs font-bold ${
                    item.status === "aviable"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Price + Add button */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-green-600 font-bold text-sm">
                  ${item.price}
                </span>
                <button
                  onClick={() => handleStoreData(item)}
                  disabled={item.status !== "aviable"}
                  className={`px-3 py-[6px] text-xs rounded flex items-center gap-1 ${
                    item.status !== "aviable"
                      ? "bg-gray-400 text-white line-through cursor-not-allowed"
                      : "bg-yellow-500 text-white hover:bg-yellow-600 transition"
                  }`}
                >
                  <FaShoppingCart className="text-xs" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
