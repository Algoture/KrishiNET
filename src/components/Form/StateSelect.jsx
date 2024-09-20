import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const StateSelect = ({ states, selectedState, onChange }) => (
  <FormControl fullWidth margin="normal">
    <InputLabel>Select State</InputLabel>
    <Select value={selectedState || ""} onChange={onChange}>
      {states.map((state) => (
        <MenuItem key={state.id} value={state.name}>
          {state.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default StateSelect;
