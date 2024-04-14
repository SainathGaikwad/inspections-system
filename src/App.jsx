import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import User_Management from "./components/UserManagement/User_Management";
import TableRow from "./components/UserManagement/TableRow";
import Table from "./components/UserManagement/Table";
import User_Management_AddDetails from "./components/UserManagement/User_Management_AddDetails";

import Company_setup from "./components/CompanySetup/Company_setup";
import Company_setup_AddDetails from "./components/CompanySetup/Company_setup_AddDetails";
import Table_Company_Details from "./components/CompanySetup/Table_Company_Details";
import TableRow_Company_Details from "./components/CompanySetup/TableRow_Company_Details";

// import Outlet_setup from "./components/Outlet_setup";
// import Outlet_setup_AddDetails from "./components/Outlet_setup_AddDetails";
import Table_Outlet_setup from "./components/OutletSetup/Table_Outlet_setup";
import TableRow_Outlet_setup from "./components/OutletSetup/TableRow_Outlet_setup";
import Outlet_setup from "./components/OutletSetup/Outlet_setup";
import Outlet_setup_AddDetails from "./components/OutletSetup/Outlet_setup_AddDetails";

import Edit_Table from "./components/UserManagement/UpdateUser/Edit_Table";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Router className="flex justify-right">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <Routes>
        <Route path="/Company_setup" element={<Company_setup />} />
        <Route
          path="/Company_setup_AddDetails"
          element={<Company_setup_AddDetails />}
        />
        <Route
          path="/Table_Company_Details "
          element={<Table_Company_Details />}
        />
        <Route
          path="/TableRow_Company_Details"
          element={<TableRow_Company_Details />}
        />
        <Route path="/Outlet_setup" element={<Outlet_setup />} />
        <Route
          path="/Outlet_setup_AddDetails"
          element={<Outlet_setup_AddDetails />}
        />
        <Route
          path="/TableRow_Outlet_setup"
          element={<TableRow_Outlet_setup />}
        />
        <Route path="/Table_Outlet_setup" element={<Table_Outlet_setup />} />

        <Route path="/User_Management" element={<User_Management />} />
        <Route
          path="/User_Management_AddDetails"
          element={<User_Management_AddDetails />}
        />
        <Route path="/TableRow" element={<TableRow />} />
        <Route path="/Table " element={<Table />} />
        <Route path="Edit_Table" element={<Edit_Table />} />
      </Routes>
    </Router>
  );
}

export default App;
