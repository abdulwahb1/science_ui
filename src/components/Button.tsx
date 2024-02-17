import React from "react";

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return <button className={` ${variant} `}>{children}</button>;
};

export default Button;
