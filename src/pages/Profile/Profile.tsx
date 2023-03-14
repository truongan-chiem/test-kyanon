import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

import "./Profile.scss";

const Profile = () => {
  const [error, setError] = useState({
    field: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reg = /^\d+$/;

    if (formData.fname === "") {
      setError({ field: "fname", message: "Full Name Must Be Require!!!" });
    } else if (formData.dbirth === "") {
      setError({ field: "dbirth", message: "Day Of Birth Must Be Require!!!" });
    } else if (formData.email === "") {
      setError({ field: "email", message: "Email Must Be Require!!!" });
    } else if (!formData.email.includes("@")) {
      setError({
        field: "email",
        message: `Invalid Email!!! " Ex : example@gmail.com "`,
      });
    } else if (formData.phone === "") {
      setError({ field: "phone", message: "Phone Number Must Be Require!!!" });
    } else if (!reg.test(formData.phone)) {
      setError({ field: "phone", message: "Phone Number Must Number!!!" });
    } else {
      setError({ field: "", message: "" });

      setSuccess(true)
      console.log(formData);
    }
  };

  const [formData, setFormData] = useState({
    fname: "",
    dbirth: "",
    email: "",
    phone: "",
  });

  const handleReset = () => {
    setFormData({ fname: "", dbirth: "", email: "", phone: "" })
    setSuccess(false)
  };
  return (
    <form
      className="profile form"
      onSubmit={(e) => handleSubmit(e)}
      onReset={handleReset}
    >
      <h1>profile</h1>
      <InputField
        title="Full Name:"
        page="profile"
        value={formData.fname}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, fname: e.target.value }))
        }
        activeError={error.field === "fname" ? true : false}
      />
      <InputField
        title="Day of Birth:"
        page="profile"
        value={formData.dbirth}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, dbirth: e.target.value }))
        }
        activeError={error.field === "dbirth" ? true : false}
        type={"date"}
      />
      <InputField
        title="Email:"
        page="profile"
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        activeError={error.field === "email" ? true : false}
      />
      <InputField
        title="Phone:"
        page="profile"
        value={formData.phone}
        onChange={(e) => {
          if (e.target.value.length <= 10) {
            setFormData((prev) => ({ ...prev, phone: e.target.value }));
          }
        }}
        activeError={error.field === "phone" ? true : false}
      />

      <div className="profile__btn">
        <Button>Update</Button>
        <Button btnType="secondary" type="reset">
          Cancel
        </Button>

        <div
          className={`profile__messError ${
            error.message ? "activeMessErr" : ""
          }`}
        >
          <p>{error.message}</p>
        </div>
        <div
          className={`profile__messSuccess ${
            success ? "activeMessSuccess" : ""
          }`}
        >
          <p>Update Successful!!!</p>
        </div>
      </div>
    </form>
  );
};

export default Profile;
