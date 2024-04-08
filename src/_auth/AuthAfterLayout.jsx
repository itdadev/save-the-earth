import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthAfterLayout = () => {
  const isAuthenticated = localStorage.getItem("tokens");

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default AuthAfterLayout;
