import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CitySelect = ({ cities, selectedCity, onChange, disabled }) => (
  <FormControl fullWidth margin="normal" disabled={disabled}>
    <InputLabel>Select City</InputLabel>
    <Select
      value={selectedCity || ""}
      onChange={(e) => {
        const selectedCityName = e.target.value;
        const cityObj = cities.find((city) => city.name === selectedCityName);
        onChange(cityObj);
      }}
    >
      {cities.map((city) => (
        <MenuItem key={city.id} value={city.name}>
          {city.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default CitySelect;
