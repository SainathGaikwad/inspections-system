import React from "react";
import { FaCog, FaHome, FaRegEnvelope, FaRegFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarToggle }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3" onClick={() => navigate("Companysetup")}>
            <FaHome className="inline-block w-6h-6 mr-2 -mt-2"></FaHome>
            Company Set Up
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="" className="px-3" onClick={() => navigate("Outletsetup")}>
            <FaRegFileAlt className="inline-block w-6h-6 mr-2 -mt-2"></FaRegFileAlt>
            Outlets Set Up
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a
            href=""
            className="px-3"
            onClick={() => navigate("UserManagement")}
          >
            <FaRegEnvelope className="inline-block w-6h-6 mr-2 -mt-2"></FaRegEnvelope>
            User Management
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
