import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const admin = JSON.parse(localStorage.getItem("admin")); // Admin login info

  // Haddii admin ma jiro, redirect to login
  if (!admin) {
    return <Navigate to="/AdminLogin" />;
  }

  // Haddii jira, dashboard ka gali karo
  return children;
}

export default ProtectedAdminRoute;
