import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders") // backend endpoint
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">All Orders</h1>

        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="bg-white shadow p-4 mb-4 rounded">
              <h2 className="font-semibold text-xl">
                Customer: {order.Customer ? order.Customer.name : "Unknown"} (
                {order.Customer ? order.Customer.email : "Unknown"})
              </h2>
              <p className="text-gray-600 mb-2">Total Price: ${order.totalPrice}</p>

              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Product</th>
                    <th className="border px-2 py-1">Price</th>
                    <th className="border px-2 py-1">Quantity</th>
                    <th className="border px-2 py-1">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((item) => (
                    <tr key={item.productId?._id}>
                      <td className="border px-2 py-1">
                        {item.productId ? item.productId.name : "Unknown"}
                      </td>
                      <td className="border px-2 py-1">
                        ${item.productId ? item.productId.price : 0}
                      </td>
                      <td className="border px-2 py-1">{item.quantity}</td>
                      <td className="border px-2 py-1">
                        ${item.productId ? item.productId.price * item.quantity : 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default OrdersPage;
