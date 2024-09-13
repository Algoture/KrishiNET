import { useState } from "react";
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
      console.log("User data:", user);
      console.log("User type:", user.prefs.userType);
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
