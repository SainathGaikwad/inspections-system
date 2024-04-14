import React from "react";

import TableRow_Outlet_setup from "./TableRow_Outlet_setup";

const Table_Outlet_setup = ({ users, onEdit, onDelete }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Outlet Name</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Owner Name</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Company Owned Outlet</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow_Outlet_setup
            key={user.companyID}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table_Outlet_setup;
