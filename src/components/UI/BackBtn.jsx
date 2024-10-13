import { Button } from "@mui/material";
const BackBtn = () => {
  return (
    <Button
      variant="contained"
      onClick={() => history.back()}
      sx={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        zIndex: 1000,
        backgroundColor: "#70e000",
      }}
    >
      Back
    </Button>
  );
};

export default BackBtn;
