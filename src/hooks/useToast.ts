import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../redux/store";
import { addToast, dismissAllToasts, removeToast } from "../redux/toastSlice";
import { ToastOptions } from "../types";
import { createToast } from "../helper";

export const useToast = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toast.toasts);

  const toast = useCallback(
    (message: string | React.ReactNode, options?: ToastOptions) => {
      const toast = createToast(message, options);
      dispatch(addToast(toast));
      if (toast.duration) {
        setTimeout(() => {
          dispatch(removeToast(toast.id));
        }, toast.duration);
      }
      return toast.id;
    },
    [dispatch]
  );

  const success = useCallback(
    (message: string | React.ReactNode, options?: ToastOptions) => {
      return toast(message, { ...options, type: "success" });
    },
    [toast]
  );

  const error = useCallback(
    (message: string | React.ReactNode, options?: ToastOptions) => {
      return toast(message, { ...options, type: "error" });
    },
    [toast]
  );

  const info = useCallback(
    (message: string | React.ReactNode, options?: ToastOptions) => {
      return toast(message, { ...options, type: "info" });
    },
    [toast]
  );

  const dismiss = useCallback(
    (id: string) => {
      setTimeout(() => {
        dispatch(removeToast(id));
      }, 300);
    },
    [dispatch]
  );

  const dismissAll = useCallback(() => {
    setTimeout(() => {
      dispatch(dismissAllToasts());
    }, 300);
  }, [dispatch]);

  return {
    toasts,
    toast,
    success,
    error,
    info,
    dismiss,
    dismissAll,
  };
};
