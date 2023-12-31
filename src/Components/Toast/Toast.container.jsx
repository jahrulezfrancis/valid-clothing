import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type) => {
  switch (type) {
    case 'info':
      toast.info(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

const Toast = () => {
  return (
    <div>
      <ToastContainer theme='light' autoClose={3000} hideProgressBar />
    </div>
  );
};

export { showToast, Toast };
