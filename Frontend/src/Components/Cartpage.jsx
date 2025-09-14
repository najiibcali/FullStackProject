import axios from "axios";
import Header from "./Header";
import { useState } from "react";

function CartPage() {
  const Customer = localStorage.getItem("customer");
  const [Product, setProducts] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );

  // Order handler
// Order handler
const handleOrder = () => {
  if (!Customer) {
    alert("Please login first to place an order");
    return;
  }

  const parsedCustomer = JSON.parse(Customer);

  // Diyaari xogta order
  // const orderData = {
  //   Customer: parsedCustomer._id,
  //   products: Product.map((item) => ({
  //     productId: item._id,
  //     Quantity: item.Quantity,
  //   })),
  //   totalPrice: Product.reduce(
  //     (sum, item) => sum + Number(item.price) * Number(item.Quantity),
  //     0
  //   ),
  // };

  // Alert xogta order
  alert("SucessFull Order");

  // Dir backend
  axios
    .post("http://localhost:3000/create/order", orderData)
    .then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        alert("Order placed successfully!");
        localStorage.removeItem("product");
        setProducts([]);
        // Redirect to orders/history page
        window.location.href = "/Dash/Orders";
      }
    })
    .catch((error) => console.error(error));
};


  // Increment
  const handleIncrement = (id) => {
    const updated = Product.map((item) =>
      item._id === id ? { ...item, Quantity: item.Quantity + 1 } : item
    );
    setProducts(updated);
    localStorage.setItem("product", JSON.stringify(updated));
  };

  // Decrement
  const handleDecrement = (id) => {
    const updated = Product.map((item) =>
      item._id === id && item.Quantity > 1
        ? { ...item, Quantity: item.Quantity - 1 }
        : item
    );
    setProducts(updated);
    localStorage.setItem("product", JSON.stringify(updated));
  };

  // Delete item
  const handleDelete = (id) => {
    const deleteData = Product.filter(
      (item) => String(item._id) !== String(id)
    );
    setProducts(deleteData);
    localStorage.setItem("product", JSON.stringify(deleteData));
  };

  // Total price
  const TotalPrice = Product.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.Quantity),
    0
  );

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg flex flex-col lg:flex-row overflow-hidden">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 p-6">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {Product.length > 0 ? (
              Product.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row justify-between items-center py-4 border-b"
                >
                  <div className="flex items-center gap-4 w-full md:w-40">
                    <img
                      src={`http://localhost:3000/allImage/${item.prImage}`}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h4 className="font-medium text-lg">{item.name}</h4>
                      <p className="text-sm text-purple-600">{item.catogery}</p>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-500 text-sm mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      −
                    </button>
                    <span className="font-semibold">{item.Quantity}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-4 md:mt-0 text-gray-700">${item.price}</div>
                  <div className="mt-4 md:mt-0 text-gray-700">
                    ${item.price * item.Quantity}
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h1 className="text-4xl">No Items in Cart</h1>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>ITEMS</span>
              <span>{Product.length}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 border-t pt-3 mb-6">
              <span>TOTAL COST</span>
              <span>${TotalPrice ? TotalPrice : 0}</span>
            </div>

            <button
              onClick={handleOrder}
              disabled={Product.length === 0 || !Customer}
              className="w-full bg-purple-600 text-white py-3 rounded shadow hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
