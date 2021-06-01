import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { alertsVarients } from "../utils/constant.utils";

const Toasts = () => {
  const { alerts } = useSelector((state) => state.common);

  useEffect(() => {
    if (alerts) notify(alerts);
  }, [alerts]);

  const notify = ({ message, variant }) => {
    switch (variant) {
      case alertsVarients.SUCCESS:
        return toast.success(message);
      case alertsVarients.WARNING:
        return toast.warn(message);
      case alertsVarients.ERROR:
        return toast.error(message);
      case alertsVarients.INFO:
        return toast.info(message);
      default:
        break;
    }
  };

  return <ToastContainer position="top-left" autoClose={8000} />;
};

export default Toasts;
