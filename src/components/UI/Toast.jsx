import { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Toast = ({ msg, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 flex justify-center items-center gap-2 bg-accent text-white px-4 py-2 rounded shadow-lg transition-all  animate-pulse">
      <CheckCircleIcon fontSize="medium" /> {msg}
    </div>
  );
};

export default Toast;
