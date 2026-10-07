import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { name: "About", path: "#about" },
  { name: "Education", path: "#education" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 w-full z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-blue-400 hover:text-blue-300 transition"
        >
          &lt;HC /&gt;
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="text-slate-200 hover:text-blue-400 transition"
                >

                  {item.name}
                </a>
                </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Resume */}
        <div className="hidden md:block">
          <Button
            href="https://drive.google.com/file/d/1Z9pvBK2hPcYqqeQHEzIxwSG5bs3di7Z2/view?usp=drive_link"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-bold md:hidden text-slate-200 text-3xl cursor-pointer active:scale-95"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-800">
          <ul className="flex flex-col gap-4 px-6 py-5">

            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-200 hover:text-blue-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Resume */}
            <li className="pt-2">
              <Button
                href="https://drive.google.com/file/d/1Z9pvBK2hPcYqqeQHEzIxwSG5bs3di7Z2/view?usp=drive_link"
                onClick={() => setMenuOpen(false)}
                className="w-full"
              >
                Resume ↗
              </Button>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;