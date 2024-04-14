import React, { useState } from "react";
// import Table from "./Table";
import { useNavigate } from "react-router-dom";
// import Table_Outlet_setup from "./Table_Company_Details";
import Table_Outlet_setup from "./Table_Outlet_setup";

const Outlet_setup = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      companyName: "Naturals",
      outletName: "Thane",
      city: "Mumbai",
      contactPerson: "Sainath",
      phone: "+91 9763439264",
      companyOwnedOutlet: "Yes",
    },
    {
      companyName: "Dominos",
      outletName: "Umri",
      city: "Nanded",
      contactPerson: "Aniket",
      phone: "+91 9763439264",
      companyOwnedOutlet: "Yes",
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
      companyName: "TIB",
      outletName: "Mathura",
      city: "Mumbai",
      contactPerson: "Rushi",
      phone: "+91 9763439264",
      companyOwnedOutlet: "No",
    },
    {
      companyName: "Dominos",
      outletName: "Thane",
      city: "Mumbai",
      contactPerson: "Sainath",
      phone: "+91 9763439264",
      companyOwnedOutlet: "Yes",
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
      <div className="flex items-center  mb-4 justify-end">
        <div className="w mr-3">
          <input
            type="text"
            placeholder="Filter by User"
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="w mr-3">
          <input
            type="text"
            placeholder="Filter by Company"
            className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mr-3"
          onClick={() => navigate("/Outlet_setup_AddDetails")}
        >
          Click here to Add Outlet{" "}
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ">
          Clear{" "}
        </button>
      </div>
      <Table_Outlet_setup
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Outlet_setup;
