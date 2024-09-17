import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContractForm from "./components/ContractForm";
import OlaMap from "./pages/OlaMap";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes"
import Profile from "./components/Profile";
function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contract" element={<ContractForm />} />
            <Route path="/olamap" element={<OlaMap />} />
            <Route path="*" element={<Navigate to="/" />} />

          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
