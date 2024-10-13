import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ handleChange }) {
  return (
    <Button
      typeof="file"
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      sx={{ backgroundColor: "#70e000", color: "#fff" }}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleChange} multiple />
    </Button>
  );
}
