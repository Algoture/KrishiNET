import HomePage from "./pages/HomePage";
import ContractForm from "./components/ContractForm";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contract" element={<ContractForm />} />
      </Routes>
    </Router>
  );
}

export default App;
