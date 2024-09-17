import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { TextField, Button } from "@mui/material";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { user, loginUser } = useAuth();

    const Loginform = useRef(null);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = { email, password }

        loginUser(userInfo)
    }

    return (
        <form className="flex flex-col gap-2 w-fit ml-2 mt-2" ref={Loginform} onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Login to KrishiNET</h1>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="password"
            />
            <Button
                type="submit"
                variant="contained"
                sx={{
                    backgroundColor: "#7bf1a8",
                    borderRadius: "5px",
                    color: "black",
                }}
            >
                Login
            </Button>
            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
        </form>
    );
};

export default Login;
