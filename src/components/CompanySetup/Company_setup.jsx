import React, { useState } from "react";
// import Table from "./Table";
import { useNavigate } from "react-router-dom";
import Table_Company_Details from "./Table_Company_Details";

const Company_setup = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      companyID: 1,
      companyName: "Naturals",
      contactPerson: "Sainath",
      phone: "+91 9763439264",
    },
    {
      companyID: 2,
      companyName: "Dominos",
      contactPerson: "ved",
      phone: "+91 9763439264",
    },
    // {
    //   id: 3,
    //   name: "Gargi",
    //   lastName: "Deshmukh",
    //   email: "gargi@gmail.com",
    //   role: "Operations Manage",
    //   company: "TIB",
    //   mappedOutlet: "SB Circle, Thane",
    // },
    {
      companyID: 3,
      companyName: "Pizzahut",
      contactPerson: "Sagar",
      phone: "+91 9763439264",
    },
  ]);

  const handleEdit = (companyID) => {
    // handle edit user logic here
  };

  const handleDelete = (companyID) => {
    setUsers(users.filter((user) => user.companyID !== companyID));
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-end mb-4">
        <div className="w mr-3">
          <input
            type="text"
            placeholder="Search Company"
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => navigate("/Company_setup_AddDetails")}
        >
          Click here to Add Company Details
        </button>
      </div>
      <Table_Company_Details
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Company_setup;
