import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { account } from "../utils/appwrite";
import { ID } from "appwrite";

const Auth = () => {
  const [userType, setUserType] = useState("farmer");
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [ip, setIp] = useState("");
  // const [location, setLocation] = useState("");
  // const [region, setRegion] = useState("");

  // const fetchIp = async () => {
  //   try {
  //     const response = await fetch("https://api.ipify.org?format=json");
  //     const data = await response.json();
  //     setIp(data.ip);
  //     const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
  //     const locationData = await locationResponse.json();
  //     setLocation(locationData.city);
  //     setRegion(locationData.region);
  //     // console.log(locationData);
  //   } catch (error) {
  //     console.error("Error fetching IP or location:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchIp();
  // }, []);
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await account.create(ID.unique(), email, password, name, {
        userType: userType,
      });
      await account.createEmailPasswordSession(email, password);
      fetchUserData();
      console.log("Registration successful");
    } catch (error) {
      console.error("Registration error: ", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const user = await account.get();
      console.log(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <form
      className="flex flex-col gap-2 w-fit ml-2 mt-2"
      onSubmit={handleRegister}
    >
      <h1 className="text-3xl font-bold">Welcome to KrishiNET </h1>
      <TextField
        label="Email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <TextField
        label="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="flex flex-row border-solid border-red-500">
        <RadioGroup value={userType} onChange={handleUserTypeChange}>
          <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
          <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
        </RadioGroup>
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#7bf1a8",
          borderRadius: "5px",
          color: "black",
        }}
      >
        Register
      </Button>
      <Button
        onClick={fetchUserData}
        variant="contained"
        sx={{
          backgroundColor: "#7bf1a8",
          borderRadius: "5px",
          color: "black",
        }}
      >
        Fetch
      </Button>
    </form>
  );
};

export default Auth;
