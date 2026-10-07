import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold transition active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-[#22C55E] text-[#09090B] hover:bg-[#4ADE80]",

    secondary:
      "border border-[#3F3F46] text-[#A1A1AA] hover:bg-[#18181B] hover:border-[#22C55E] hover:text-[#22C55E]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={styles}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;