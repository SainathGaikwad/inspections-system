import React, { useState } from "react";
// import Table from "./Table";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const User_Management = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sainath",
      lastName: "Gaikwad",
      email: "sainath@gmail.com",
      ContactNo: "+91 9763439267",
      role: "Operations Manage",
      company: "Naturals",
      Outlet: "SB Circle, Thane",
    },
    {
      id: 2,
      name: "Vedant",
      lastName: "Udtewar",
      email: "vedant@gmail.com",
      ContactNo: "+91 9763439267",
      role: "Operations Manage",
      company: "Dominos",
      Outlet: "SB Circle, Thane",
    },
    {
      id: 3,
      name: "Gargi",
      lastName: "Deshmukh",
      email: "gargi@gmail.com",
      ContactNo: "+91 9763439267",
      role: "Operations Manage",
      company: "TIB",
      Outlet: "SB Circle, Thane",
    },
  ]);

  const handleEdit = (id) => {
    // handle edit user logic here
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-end mb-4">
        <div className="w mr-3 ">
          <input
            type="text"
            placeholder="Search user"
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => navigate("/User_Management_AddDetails")}
        >
          Add New User
        </button>
      </div>
      <Table users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default User_Management;
