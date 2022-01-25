import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  activeClassName?: string;
  link?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type, className, link, children, onClick }: ButtonProps) => {
  if (link) {
    return (
      <Link to={link} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
