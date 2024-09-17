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
  }, []);

  const registerForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 != password2) {
      alert("Passwords do not match");
      return
    }

    const userInfo = {
      name,
      email,
      phone,
      city,
      state,
      password1,
      password2,
      userType
    }

    registerUser(userInfo)

  };

  const handleUserTypeChange = (e) => {
    e.preventDefault();
    setUserType(e.target.value)
  }

  return (
    <form className="flex flex-col gap-2 w-fit ml-2 mt-2" ref={registerForm} onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold">Welcome to KrishiNET </h1>
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} />

      <TextField
        label="Name"
        onChange={(e) => setName(e.target.value)}
        value={name} />

      <TextField
        label="Phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone} />

      <TextField
        label="City"
        onChange={(e) => setCity(e.target.value)}
        value={city} />

      <TextField
        label="State"
        onChange={(e) => setState(e.target.value)}
        value={state} />

      <TextField
        label="Password"
        type="password"
        autoComplete="password"
        onChange={(e) => setPassword1(e.target.value)}
        value={password1} />

      <TextField
        label="Confirm Password"
        type="password"
        autoComplete="password"
        onChange={(e) => setPassword2(e.target.value)}
        value={password2} />

      <RadioGroup
        value={userType}
        onChange={handleUserTypeChange}>
        <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
        <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
      </RadioGroup>

      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#7bf1a8", borderRadius: "5px", color: "black" }}>
        Register
      </Button>

      <p>Already have an account? <NavLink to="/login">login</NavLink></p>
    </form>
  );
};

export default Register;
