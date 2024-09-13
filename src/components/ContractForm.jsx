import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "../style/index.css";
const ContractForm = () => {
  const [cropType, setCropType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const handleCreateContract = async () => {
    const contract = {
      cropType,
      quantity: parseInt(quantity),
      pricePerKg: parseInt(pricePerKg),
      status: "open",
      createdAt: new Date().toISOString(),
    };
  };

  return (
    <form className="flex gap-2 w-fit ml-2 mt-2">
      <TextField
        label="Crop Name"
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
      />
      <TextField
        label="Quantity (kg)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <TextField
        label="Price per Kg"
        value={pricePerKg}
        onChange={(e) => setPricePerKg(e.target.value)}
      />
      <Button
        onClick={handleCreateContract}
        variant="contained"
        sx={{ backgroundColor: "#7bf1a8", borderRadius: "5px",color:"black" }}
      >
        Create Contract
      </Button>
    </form>
  );
};
export default ContractForm;
