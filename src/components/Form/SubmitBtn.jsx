import { Button } from "@mui/material";
const SubmitBtn = ({ text }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ backgroundColor: "#70e000", color: "black" }}
      className="w-full p-3 rounded-lg"
    >
      {text}
    </Button>
  );
};

export default SubmitBtn;
