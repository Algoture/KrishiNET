import { Button } from "@mui/material";

const SubmitBtn = ({ text, loading }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ backgroundColor: "#70e000", color: "black" }}
      className="w-full p-3 rounded-lg"
    >
      {loading ? <div className="loader"></div> : text}
    </Button>
  );
};

export default SubmitBtn;
