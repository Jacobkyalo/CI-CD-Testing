import React from "react";
import { toast } from "react-toastify";

const Login = () => {
  return (
    <div>
      <button
        style={{ marginTop: "2rem" }}
        onClick={() => toast.success("Login Successfully")}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
