export type ToastType = "success" | "error" | "info";

export interface ToastOptions {
  duration?: number;
  position?: ToastPosition;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  type?: ToastType;
}

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  message: string | React.ReactNode;
  type: ToastType;
  createdAt: number;
  visible: boolean;
  position: ToastPosition;
  duration: number;
  style?: React.CSSProperties;
  className?: string;
}
