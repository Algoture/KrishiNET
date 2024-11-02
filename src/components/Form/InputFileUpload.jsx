import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

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
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState();
  const [unit, setUnit] = useState("");

  const onFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileName(files[0].name);
    const sizeInKB = Math.round(files[0].size / 1024);
    if (sizeInKB < 1024) {
      setFileSize(sizeInKB);
      setUnit("KB");
    } else {
      setFileSize((sizeInKB / 1024).toFixed(2));
      setUnit("MB");
    }
    if (handleChange) handleChange(event);
  };

  return (
    <div className="flex justify-between items-center">
      <Button
        typeof="file"
        component="label"
        variant="contained"
        tabIndex={-1}
        sx={{ backgroundColor: "#70e000", color: "#000" }}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={onFileChange} />
      </Button>
      <ul className="mt-2 text-base text-link">
        <li>{fileName}</li>
        <li>
          {fileSize} {unit}
        </li>
      </ul>
    </div>
  );
}
