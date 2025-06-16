import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="app-color">{children}</div>;
};

export default AuthLayout;
