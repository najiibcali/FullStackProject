import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/admin/login", { email, password });
      localStorage.setItem("admin", JSON.stringify(res.data.admin));
      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Server error");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-yellow-500 py-2 text-white rounded">Login</button>
    </form>
  );
}

export default AdminLogin;
