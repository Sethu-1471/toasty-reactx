import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast } from "../types";
import { ToastState } from "./toastInterface";

const initialState: ToastState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
    dismissAllToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { addToast, removeToast,dismissAllToasts } = toastSlice.actions;
export default toastSlice.reducer;
