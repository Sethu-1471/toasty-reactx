import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Toast } from "./Toast";
import { useToast } from "../hooks/useToast";
import { getToastPositionStyle } from "../helper";

export const ToastContainer = () => {
  const toasts = useSelector((state: RootState) => state.toast.toasts);
  const { dismiss } = useToast();

  const positionGroups = toasts.reduce((groups, toast) => {
    const position = toast.position;
    if (!groups[position]) {
      groups[position] = [];
    }
    groups[position].push(toast);
    return groups;
  }, {} as Record<string, typeof toasts>);

  return (
    <>
      {Object.entries(positionGroups).map(([position, positionToasts]) => (
        <div
          key={position}
          className="toast-container"
          style={getToastPositionStyle(position)}
        >
          {positionToasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onRemove={dismiss} />
          ))}
        </div>
      ))}
    </>
  );
};
