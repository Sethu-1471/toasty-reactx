import React, { useEffect, useState } from "react";
import { Toast as ToastType } from "../types";
import { getToastTypeClass } from "../helper";

interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`toast ${getToastTypeClass(toast)} ${
        isVisible ? "toast-visible" : ""
      } ${toast.className || ""}`}
      style={toast.style}
      onClick={() => onRemove(toast.id)}
    >
      <div className="toast-message">{toast.message}</div>
    </div>
  );
};
