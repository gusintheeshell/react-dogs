import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";
import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forgot" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
