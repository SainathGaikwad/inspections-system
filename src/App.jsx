import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Companysetup from "./components/Companysetup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import Outletsetup from "./components/Outletsetup";

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
        <Route path="/Companysetup" element={<Companysetup />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/Outletsetup" element={<Outletsetup />} />
      </Routes>
    </Router>
  );
}

export default App;
