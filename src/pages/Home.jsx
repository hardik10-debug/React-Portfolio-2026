import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DeveloperCard from "../components/DeveloperCard";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <main className="bg-slate-900 text-slate-50">

        <section className="max-w-6xl mx-auto px-8 py-16 min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap 16">

          {/* Left Side */}
          <div className=" w-full md:w-[55%] flex flex-col gap-6">

            <p className="text-cyan-400 font-semibold tracking-wide">
              HEY, I'M HARDIK 👋
            </p>

            <h1 className="text-4xl sm:text-7xl font-bold leading-[1.05] tracking-tight">
              Building intuitive web experiences with React & AI.
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Building responsive React applications, integrating AI
              solutions, and creating user experiences people enjoy using.
            </p>
            
          <div className="flex flex-wrap gap-4 pt-2 mb-5">
            <Button to="/projects">
              View My Work
            </Button>
            
            <Button to="/contact" variant="secondary">
              Let's Work Together
            </Button>
          </div>

          </div>

          {/* Right Side */}
          <div className=" w-full md:w-[45%]">
            <DeveloperCard />
          </div>

        </section>

      </main>
    </>
  );
};

export default Home;