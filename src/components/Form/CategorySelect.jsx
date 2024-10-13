import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { cropsCategories } from "../../utils/Data";
const CategorySelect = ({ category, onChange }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Select Category</InputLabel>
      <Select value={category || ""} onChange={onChange}>
        {cropsCategories.map((crop) => (
          <MenuItem key={crop.id} value={crop.name}>
            {crop.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
