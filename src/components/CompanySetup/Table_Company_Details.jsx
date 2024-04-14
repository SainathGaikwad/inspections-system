import React from "react";
import TableRow_Company_Details from "./TableRow_Company_Details";

const Table_Company_Details = ({ users, onEdit, onDelete }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="px-4 py-2">Company ID</th>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Contact Person</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow_Company_Details
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

export default Table_Company_Details;
