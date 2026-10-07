import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const RESUME_URL =
  "https://drive.google.com/file/d/1Z9pvBK2hPcYqqeQHEzIxwSG5bs3di7Z2/view?usp=drive_link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-[#09090B] border-b border-[#27272A]">
      <div className="max-w-6xl h-full mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-[#22C55E] hover:text-[#4ADE80] transition"
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
                  className="text-[#A1A1AA] hover:text-[#22C55E] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Resume */}
        <div className="hidden md:block">
          <Button href={RESUME_URL}>
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#A1A1AA] text-3xl font-bold cursor-pointer active:scale-95 hover:text-[#22C55E] transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#09090B] border-t border-[#27272A]">
          <ul className="flex flex-col gap-4 px-6 py-5">

            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={handleNavClick}
                  className="block text-[#A1A1AA] hover:text-[#22C55E] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Resume */}
            <li className="pt-2">
              <Button
                href={RESUME_URL}
                onClick={handleNavClick}
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