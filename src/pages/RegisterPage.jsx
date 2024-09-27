import { useState, useRef, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel, Checkbox } from "@mui/material";
import { GetState, GetCity } from "react-country-state-city";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
const countryId = 101; // India
import {
  PasswordInput,
  StateSelect,
  CitySelect,
  SubmitBtn,
  InputField,
  Already,
} from "../Index";

const RegisterPage = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [userType, setUserType] = useState("farmer");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [checked, setChecked] = useState(false);
  const { user, registerUser } = useAuth();
  const navigate = useNavigate();
  const [stateList, setStateList] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    const fetchStates = async () => {
      const states = await GetState(countryId);
      setStateList(states);
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (state) {
      const selectedStateObj = stateList.find((s) => s.name === state);
      if (selectedStateObj) {
        const fetchCities = async () => {
          const cities = await GetCity(countryId, selectedStateObj.id);
          setCityList(cities);
        };
        fetchCities();
      }
    } else {
      setCityList([]);
    }
  }, [state, stateList]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const registerForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      email,
      phone,
      city,
      state,
      password1,
      userType,
      coordinates,
    };
    registerUser(userInfo);
  };

  const stateChange = (e) => {
    const selectedStateName = e.target.value;
    setState(selectedStateName);
  };

  const cityChange = (cityObj) => {
    if (cityObj) {
      setCity(cityObj.name); // Set city name
      const lat = Number(cityObj.latitude);
      const lng = Number(cityObj.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        const latString = lat.toFixed(5).toString();
        const lngString = lng.toFixed(5).toString();
        const newCoordinates = [latString, lngString];
        setCoordinates(newCoordinates);
      }
    } else {
      console.error("Invalid city object", cityObj);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-screen bg-gray-100 p-8">
      <div className="bg-white items-center p-8 rounded-lg shadow-box w-[30rem]">
        <h1 className="text-3xl font-semibold text-left">Sign Up</h1>
        <p className="text-gray-600 mb-6">to get started</p>

        <form ref={registerForm} onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Phone"
            value={phone}
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          <StateSelect
            states={stateList}
            selectedState={state}
            onChange={stateChange}
          />
          <CitySelect
            cities={cityList}
            selectedCity={city}
            onChange={cityChange}
            disabled={!state}
          />
          <PasswordInput
            label="Password"
            value={password1}
            showPassword={showPassword1}
            toggleShowPassword={() => setShowPassword1(!showPassword1)}
            onChange={(e) => setPassword1(e.target.value)}
          />

          <RadioGroup
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="flex space-x-4"
          >
            <div className="flex space-x-4">
              <FormControlLabel
                value="farmer"
                control={<Radio />}
                label="Farmer"
              />
              <FormControlLabel
                value="buyer"
                control={<Radio />}
                label="Buyer"
              />
            </div>
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="Agree to our terms and conditions"
            required
          />
          <SubmitBtn text="Register" />
        </form>

        <Already log={false} />
      </div>
      <img
        src="signUp.png"
        alt="signUpImg"
        className="absolute right-0 bottom-0 -z-50"
      />
    </div>
  );
};

export default RegisterPage;
