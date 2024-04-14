import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Company_setup_AddDetails = () => {
  return (
    <div class="mt-6 flex  items-center justify-left ml-20">
      <Card color="transparent" shadow={false} className="justify align-middle">
        <Typography variant="h4" color="blue-gray">
          Add/Edit Company details
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please Fill all the details
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Company ID
            </Typography>
            <Input
              // type="number"
              size="lg"
              placeholder="Naturals"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Company
            </Typography>
            <select
              id="Companies"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="us">Naturals</option>
              <option value="ca">Dominos</option>
              <option value="mx">Pizzahut</option>
            </select>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contact Person{" "}
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Sainath"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone{" "}
            </Typography>
            <Input
              type="phone"
              size="lg"
              placeholder="+91 9763439264"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email{" "}
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@gmail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={() => navigate("/")}>
            Save details
          </Button>
          <Button className="mt-6" fullWidth>
            Cancel
          </Button>
          {/* <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Save
            </a>
          </Typography> */}
        </form>
      </Card>
    </div>
  );
};

export default Company_setup_AddDetails;
