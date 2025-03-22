import { Toast, ToastOptions, ToastPosition, ToastType } from "../types";

export const defaultPosition: ToastPosition = "bottom-center";
export const defaultDuration = 3000;

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const createToast = (
  message: string | React.ReactNode,
  options?: ToastOptions
): Toast => {
  const id = generateId();
  return {
    id,
    message,
    type: options?.type || ("success" as ToastType),
    createdAt: Date.now(),
    visible: true,
    position: options?.position || defaultPosition,
    duration: options?.duration || defaultDuration,
    style: options?.style,
    className: options?.className,
  };
};

export const getToastPositionStyle = (position: string) => {
  switch (position) {
    case "top-left":
      return { top: "1rem", left: "1rem" };
    case "top-center":
      return { top: "1rem", left: "50%", transform: "translateX(-50%)" };
    case "top-right":
      return { top: "1rem", right: "1rem" };
    case "bottom-left":
      return { bottom: "1rem", left: "1rem" };
    case "bottom-center":
      return { bottom: "1rem", left: "50%", transform: "translateX(-50%)" };
    case "bottom-right":
      return { bottom: "1rem", right: "1rem" };
    default:
      return { bottom: "1rem", right: "1rem" };
  }
};

export const getToastTypeClass = (toast: ToastOptions) => {
  switch (toast.type) {
    case "success":
      return "toast-success";
    case "error":
      return "toast-error";
    case "info":
      return "toast-info";
    default:
      return "";
  }
};
