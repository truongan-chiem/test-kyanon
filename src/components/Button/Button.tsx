import React from "react";
import "./Button.scss";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  btnType?: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ children, btnType = "primary", type = "submit" }: Props) => {
  return (
    <button className={`button ${btnType}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
