import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090B] border-t border-[#27272A] text-[#A1A1AA]">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-2xl font-semibold tracking-wide text-[#22C55E] hover:text-[#4ADE80] transition"
            >
              &lt;HC /&gt;
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#71717A]">
              Frontend developer focused on building modern web applications,
              intuitive user experiences, and AI-powered solutions.
            </p>

            <p className="mt-4 text-sm text-[#71717A]">
              Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-y-3">

              <Link
                to="/"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm hover:text-[#22C55E] transition"
              >
                About
              </Link>

              <Link
                to="/education"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Education
              </Link>

              <Link
                to="/experience"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Experience
              </Link>

              <Link
                to="/skills"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="text-sm hover:text-[#22C55E] transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#71717A]">
              Have a project, opportunity, or just want to say hello?
            </p>

            <a
              href="mailto:hardikchadha10@gmail.com"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#A1A1AA] hover:text-[#22C55E] transition"
            >
              <MdEmail size={18} />
              hardikchadha10@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">

              <a
                href="https://github.com/hardik10-debug"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#27272A] hover:border-[#22C55E] hover:text-[#22C55E] hover:bg-[#18181B] transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/hardik-chadha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#27272A] hover:border-[#22C55E] hover:text-[#22C55E] hover:bg-[#18181B] transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/hardikchadha_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#27272A] hover:border-[#22C55E] hover:text-[#22C55E] hover:bg-[#18181B] transition"
              >
                <FaInstagram size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-[#27272A] mt-10 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-sm text-[#52525B] text-center md:text-left">
              © {currentYear} Hardik Chadha. All rights reserved.
            </p>

            {/* Made With */}
            <p className="text-sm text-[#52525B]">
              Designed & built with{" "}
              <span className="text-[#22C55E]">♥</span> using React.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;