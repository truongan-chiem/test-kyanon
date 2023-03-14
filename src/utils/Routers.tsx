import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import { useGlobalContext } from "../Context";

const Routers = () => {
  const { isLogin } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route element={<Profile />} path="/profile" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
};

export default Routers;
