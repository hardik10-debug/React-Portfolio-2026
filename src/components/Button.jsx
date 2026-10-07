import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold transition active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600",

    secondary:
      "border border-slate-700 text-slate-200 hover:bg-slate-800",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  // React Router link
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

  // Normal button
  return (
    <button
      type="button"
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;