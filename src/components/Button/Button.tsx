import React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button>{props.label}</button>;
};

export default Button;
