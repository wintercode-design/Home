import { ToastContainer } from "react-toastify";

import React from "react";

const ToastNotif = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default ToastNotif;
