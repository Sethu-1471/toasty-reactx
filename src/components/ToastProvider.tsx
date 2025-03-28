import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
