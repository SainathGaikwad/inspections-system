import React from "react";
import TableRow from "./TableRow";

const Table = ({ users, onEdit, onDelete }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2">First Name</th>
          <th className="px-4 py-2">Last Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Contact</th>
          <th className="px-4 py-2">Role</th>
          <th className="px-4 py-2">Company</th>

          <th className="px-4 py-2">Outlet Name</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
