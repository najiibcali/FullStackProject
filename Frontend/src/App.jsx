
import {  Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Cartpage from "./Components/Cartpage";
import Sidebar from "./Pages/SideNav";
import ProductFrom from "./Pages/ProductFrom";
import BookTable from "./Pages/Books";
import CustomerTable from "./Pages/CustomerTable";
import CustomerRegistrationForm from "./Pages/CustomerRegister";
import CustomerLogin from "./Pages/CustomerLogin";
import History from "./Pages/HistoreyPage";
import CustomerCodsi from "./Pages/CustomerCodsi";
import ProtectedRoute from "./Pages/ProductRoute";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDash";
import OrdersPage from "./Pages/Order";

function App() {
  return (
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/register" element={<CustomerRegistrationForm />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="Historey" element={<History />} />

        {/* Dashboard (Protected) */}
        <Route
          path="/Dash"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        >
          <Route path="add-book" element={<ProductFrom />} />
          <Route path="books" element={<BookTable />} />
          <Route path="Customer" element={<CustomerTable />} />
          <Route path="Codsi" element={<CustomerCodsi />} />
          <Route path="Orders" element={<OrdersPage />} />
        </Route>

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
  );
}

export default App;
