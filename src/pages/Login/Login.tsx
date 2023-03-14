import React, { useState } from "react";

import Button from "../../components/Button/Button";
import CheckBox from "../../components/CheckBox/CheckBox";
import InputField from "../../components/InputField/InputField";
import { useGlobalContext } from "../../Context";

import "./Login.scss";

const Login = () => {
  const [showPw, setShowPw] = useState<boolean>(false);
  const {setLogin} = useGlobalContext();


  const [data] = useState({
    email : 'admin@gmail.com',
    password  : "admin@123"
  })

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    field: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === "") {
      setError({ field: "email", message: "Email must be require!!!" });
    } else if (formData.password === "") {
      setError({ field: "password", message: "Password must be require!!!" });
    } else if(formData.email !== data.email || formData.password !== data.password){
      setError({
        field: "all",
        message: "Email or Password Incorrect!!!",
      });
    }
    else{
      console.log(formData);
      setLogin(true)
      setError({
        field: "",
        message: "",
      });

    }
     
    
  };

  return (
    <form className="login form" onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <InputField
        title="Email:"
        placeholder="example@kyanon.digital"
        type={"email"}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        value={formData.email}
        activeError={error.field === "email" || error.field === 'all' ? true : false}
      />
      <InputField
        title="Password:"
        placeholder="******"
        type={showPw ? "text" : "password"}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        value={formData.password}
        activeError={error.field === "password" || error.field === 'all' ? true : false}
      />
      <div className="login__action">
        <CheckBox showPw={showPw} setShowPw={setShowPw} />
        <Button>Sign in</Button>
        <div
          className={`login__messError ${error.message ? "activeMessErr" : ""}`}
        >
          <p>{error.message}</p>
        </div>
      </div>
    </form>
  );
};

export default Login;
