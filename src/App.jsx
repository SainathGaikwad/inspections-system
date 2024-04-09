import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Companysetup from "./components/Companysetup";
import { Route, Routes } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import Outletsetup from "./components/Outletsetup";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex justify-right">
      <Navbar></Navbar>
      <Routes>
        <Route path="Companysetup" element={<Companysetup />} />
        <Route path="UserManagement" element={<UserManagement />} />
        <Route path="Outletsetup" element={<Outletsetup />} />
      </Routes>
      <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
    </div>
  );
}
