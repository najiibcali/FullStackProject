import { Link, Outlet } from "react-router-dom";
import SidenavList from "../Pages/SideNavlist";

function Sidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-orange-600 h-[100vh] relative transition-all duration-300 ease-in-out">
        <div className="flex p-2 relative">
          <i className="text-white fa-solid fa-chevron-left hidden absolute right-2"></i>
          <i className="text-white ml-0 fa-solid fa-chevron-right absolute right-2"></i>
        </div>

        {/* Sidebar Links */}
        <div className="pt-20 flex flex-col gap-y-6 px-4">
          <Link to="/Dash">
            <SidenavList icon="fa-home" title="Dashboard" />
          </Link>

          <Link to="/Dash/books">
            <SidenavList icon="fa-book" title="Products" />
          </Link>

          <Link to="/Dash/add-book">
            <SidenavList icon="fa-plus" title="Add Products" />
          </Link>

          <Link to="/Dash/Customer">
            <SidenavList icon="fa-user" title="Customers" />
          </Link>

          <Link to="/Dash/Orders">
            <SidenavList icon="fa-shopping-cart" title="Orders" />
          </Link>

          <Link to="/Dash/Codsi">
            <SidenavList icon="fa-shopping-cart" title="Codsi" />
          </Link>

         {/* <Link to="/Dash/addOrder">
            <SidenavList icon="fa-shopping-cart" title="Add Orders" />
          </Link> */}

          <Link to="/Dash/reports">
            <SidenavList icon="fa-chart-bar" title="Reports" />
          </Link>

          <Link to="/Dash/settings">
            <SidenavList icon="fa-cog" title="Settings" />
          </Link> 
         
        </div>
      </div> 

      {/* Main Content Area */}
      <div className="w-full p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
