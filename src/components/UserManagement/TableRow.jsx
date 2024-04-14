import React from "react";
import { useNavigate } from "react-router-dom";

const TableRow = ({ user, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td className="border px-4 py-2">{user.name}</td>
      <td className="border px-4 py-2">{user.lastName}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.ContactNo}</td>
      <td className="border px-4 py-2">{user.role}</td>
      <td className="border px-4 py-2">{user.company}</td>
      <td className="border px-4 py-2">{user.Outlet}</td>

      <td className="border px-4 py-2">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
          onClick={() => navigate("/Edit_Table")}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
