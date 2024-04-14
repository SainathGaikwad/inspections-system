import React from "react";

const TableRow_Company_Details = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{user.companyID}</td>
      <td className="border px-4 py-2">{user.companyName}</td>
      <td className="border px-4 py-2">{user.contactPerson}</td>
      <td className="border px-4 py-2">{user.phone}</td>
      <td className="border px-4 py-2">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => onDelete(user.companyID)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow_Company_Details;
