import React from "react";
import DeveloperCard from "../components/DeveloperCard";
import Button from "../components/Button";
import { TiGroupOutline } from "react-icons/ti";
import { FaDiagramProject } from "react-icons/fa6";
import profileImage from "../assets/Profile.jpg";

const Home = () => {
  return (
    <main className="bg-[#09090B] text-[#A1A1AA] min-h-screen pt-16">

      <section className="max-w-6xl mx-auto px-8 py-16 min-h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-between gap-16">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full md:w-[55%] flex flex-col gap-6">

          {/* Intro */}
          <p className="text-[#22C55E] font-semibold tracking-wide">
            HEY, I'M HARDIK 👋
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            Building intuitive web experiences with{" "}
            <span className="text-[#22C55E]">React</span> & AI.
          </h1>

          {/* Description */}
          <p className="text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
            Building responsive React applications, integrating AI
            solutions, and creating user experiences people enjoy using.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 mb-5">

            <Button to="/projects">
              <FaDiagramProject size={20} className="mx-2" />
              View My Work
            </Button>

            <Button
              to="/contact"
              variant="secondary"
            >
              <TiGroupOutline size={20} className="mx-2" />
              Let's Work Together
            </Button>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full md:w-[45%] relative">

          {/* Profile */}
          <div className="flex justify-center mb-6">

            <div className="relative">

              {/* Portrait */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.15)] bg-[#18181B]">

                <img
                  src={profileImage}
                  alt="Hardik"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Online Status */}
              <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#22C55E] border-4 border-[#09090B]" />

            </div>

          </div>

          {/* Developer Terminal */}
          <DeveloperCard />

        </div>

      </section>

    </main>
  );
};

export default Home;