import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Edit_Table = () => {
  return (
    <div class="mt-6 flex  items-center justify-left ml-20">
      <Card color="transparent" shadow={false} className="justify align-middle">
        <Typography variant="h4" color="blue-gray">
          Update User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please Fill all the details
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              First Name
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="sainath"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Last Name
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Gaikwad"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Contact Number
            </Typography>
            <Input
              name="ContactNo"
              size="lg"
              placeholder="+91-9763439264"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              User Type
            </Typography>
            <select
              name="role"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="us">Company Admin</option>
              <option value="us">Company Operation Head</option>
              <option value="us">Company Operation Manager</option>
              <option value="us">Company QC Manager</option>
              <option value="ca">Outlet Manager</option>
              <option value="mx">Outlet Owner</option>
            </select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Company
            </Typography>
            <select
              name="company"
              id="Companies"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="us">Naturals</option>
              <option value="ca">Dominos</option>
              <option value="mx">Pizzahut</option>
            </select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Outlet
            </Typography>
            <select
              name="Outlet"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="us">SB, Circle</option>
              <option value="ca">Hingoli Naka, Nanded</option>
              <option value="mx">Shri Nagar, Nanded</option>
            </select>
          </div>
          <Button className="mt-6" fullWidth>
            Update User details
          </Button>
          <Button className="mt-6" fullWidth>
            Cancel
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Edit_Table;
