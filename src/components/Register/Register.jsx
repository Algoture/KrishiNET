import { useState, useRef, useEffect } from "react";
import { TextField, Button, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useAuth } from "../../utils/AuthContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("farmer");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { user, registerUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const registerForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    const userInfo = {
      name,
      email,
      phone,
      city,
      state,
      password1,
      password2,
      userType,
    };

    registerUser(userInfo);
  };

  const handleUserTypeChange = (e) => {
    e.preventDefault();
    setUserType(e.target.value);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-screen bg-gray-100">
      <div className="bg-white items-center p-8 rounded-lg shadow-lg w-[30rem] ">
        <h1 className="text-3xl   font-semibold mb-2">Welcome to Krishi<span className="text-green-400">NET</span></h1>
        <p className="text-gray-600 mb-6">Create an account to get started</p>
        <form className="space-y-4 " ref={registerForm} onSubmit={handleSubmit}>
         
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full"
          />
           <TextField
            label="Email"
            fullWidth
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full"
          />
          <TextField
            label="Phone"
            fullWidth
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="w-full"
          />
          <TextField
            label="City"
            fullWidth
            variant="outlined"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="w-full"
          />
          <TextField
            label="State"
            fullWidth
            variant="outlined"
            onChange={(e) => setState(e.target.value)}
            value={state}
            className="w-full"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
            className="w-full"
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            className="w-full"
          />
         <RadioGroup
  value={userType}
  onChange={handleUserTypeChange}
  className="flex space-x-4"
>
  <div className="flex space-x-4"> 
    <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
    <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
  </div>
</RadioGroup>

          {/* <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600">
              Agree to our terms and conditions
            </label>
          </div> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#7bf1a8", color: "black" }}
            className="w-full p-3 rounded-lg"
          >
            Register
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink to="/login" c className="text-blue-500">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
