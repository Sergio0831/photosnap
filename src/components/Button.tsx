import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  activeClassName?: string;
  link?: string;
  name?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  type,
  className,
  link,
  children,
  onClick,
  name
}: ButtonProps) => {
  if (link) {
    return (
      <Link to={link} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} name={name} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
