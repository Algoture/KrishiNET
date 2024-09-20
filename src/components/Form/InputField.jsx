import { TextField } from "@mui/material";

const InputField = ({ label, value, onChange, type }) => (
  <TextField
    label={label}
    fullWidth
    variant="outlined"
    onChange={onChange}
    value={value}
    type={type}
  />
);

export default InputField;
