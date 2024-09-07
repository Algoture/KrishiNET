import { TextField, Button, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import "../style/index.css";
import { firebaseAuth } from "../utils/firebase";
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
    await firebaseAuth.firestore().collection("contracts").add(contract);
  };

  return (
    <form className="flex flex-col gap-2 w-fit ml-2">
      <InputLabel>Crop Type</InputLabel>
      <Select
        label="Crop Type"
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
      >
        <MenuItem value={10}>Wheat</MenuItem>
        <MenuItem value={20}>Fruits</MenuItem>
        <MenuItem value={30}>Vegetables</MenuItem>
      </Select>
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
