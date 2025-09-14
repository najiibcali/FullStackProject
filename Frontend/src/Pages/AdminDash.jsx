import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideNav";
function AdminDashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (!admin) {
      navigate("/admin/login");
      return;
    }

    axios.get("http://localhost:3000/admin/dashboard", {
      headers: { admin: JSON.stringify(admin) }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => {
      alert(err.response?.data?.error || "Unauthorized");
      navigate("/admin/login");
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="">
      {/* <h1 className="text-2xl font-bold mb-4"></h1> */}
      <Sidebar/>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}

export default AdminDashboard;
