import React, { useRef, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User_Management_AddDetails = () => {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const ContactNo = useRef();

  // const users = {
  //   fname: fname.current.value,
  //   lname: "",
  //   email: "",
  //   ContactNo: "",
  // };
  // console.log(fname.current.focus());

  // const [user, setUser] = useState(users);
  const navigate = useNavigate();

  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const submitForm = async (e) => {
    e.preventDefault();
    const users = {
      fname: fname.current.value,
      lname: "",
      email: "",
      ContactNo: "",
    };
    console.log("button Click");
    console.log(fname.current.value);
    //   await axios
    //     .post("http://localhost:8000/api/create", users)
    //     .then((response) => {
    //       toast.success(response.data.msg, { position: "top-right" });
    //       navigate("/");
    //     })
    //     .catch((error) => console.log(error));
  };
  return (
    <div className="mt-6 flex  items-center justify-left ml-20">
      <Card color="transparent" shadow={false} className="justify align-middle">
        <Typography variant="h4" color="blue-gray">
          + Add New User
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please Fill all the details
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={submitForm}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              name="fname"
              color="blue-gray"
              className="-mb-3"
            >
              First Name
            </Typography>
            <Input
              // onChange={inputHandler}
              ref={fname}
              name="fname"
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
              // onChange={inputHandler}
              ref={lname}
              name="lname"
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
              ref={email}
              name="email"
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
              ref={ContactNo}
              name="ContactNo"
              size="lg"
              placeholder="+91-9763439264"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              User type{" "}
            </Typography>
            <Input
              size="lg"
              placeholder="Operations manager"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Company{" "}
            </Typography>
            <Input
              size="lg"
              placeholder="Barclays"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Save details
          </Button>
          <Button className="mt-6" fullWidth>
            Cancel
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default User_Management_AddDetails;
