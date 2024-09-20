import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

const PasswordInput = ({
  label,
  value,
  showPassword,
  toggleShowPassword,
  onChange,
}) => (
  <FormControl variant="outlined" fullWidth>
    <InputLabel>{label}</InputLabel>
    <OutlinedInput
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={toggleShowPassword} edge="end">
            {showPassword ? (
              <VisibilityOffRoundedIcon />
            ) : (
              <VisibilityRoundedIcon />
            )}
          </IconButton>
        </InputAdornment>
      }
      label={label}
    />
  </FormControl>
);

export default PasswordInput;
