import { ReactNode, useEffect } from "react";
import "../../styles/global/Toast.css";

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}

const icons: Record<string, ReactNode> = {
  success: <span className="custom-toast-icon">✓</span>,
  error: <span className="custom-toast-icon">✕</span>,
  warning: <span className="custom-toast-icon">!</span>,
  info: <span className="custom-toast-icon">i</span>,
};

const titles: Record<string, string> = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

export default function Toast({
  message,
  onClose,
  type = "error",
  duration = 8000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`custom-toast custom-toast-${type}`} role="alert">
      <div className="custom-toast-icon-wrapper">{icons[type]}</div>
      <div className="custom-toast-content">
        <div className="custom-toast-title">{titles[type]}</div>
        <div className="custom-toast-message">{message}</div>
      </div>
      <button
        className="custom-toast-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
