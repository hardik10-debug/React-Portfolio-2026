import React from "react";
import InfoCard from "../components/InfoCard";
import aboutInfo from "../data/about";
import Button from "../components/Button";
import profileImage from "../assets/Profile.jpg";
import { GrResume } from "react-icons/gr";

const About = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>

            <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
              ABOUT ME
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 text-white">
              Frontend Developer building modern web applications and
              AI-powered experiences.
            </h1>

            <div className="mt-8 space-y-5 text-[#A1A1AA] leading-7 max-w-2xl">

              <p>
                I’m a frontend developer focused on building responsive and
                user-friendly web applications with React and modern
                JavaScript.
              </p>

              <p>
                I have experience working with technologies like React,
                Node.js, Express and PostgreSQL, along with building
                AI-powered applications and interactive user experiences.
              </p>

              <p>
                Outside of work, I enjoy building personal projects,
                exploring new frontend technologies and experimenting
                with AI.
              </p>

            </div>

            {/* Resume Button */}
            <div className="mt-10">
              <Button
                href="https://drive.google.com/file/d/1Z9pvBK2hPcYqqeQHEzIxwSG5bs3di7Z2/view?usp=drive_link"
              >
                <GrResume size={20} className="mx-2"/>
                View Resume
              </Button>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">

            {/* Profile Card */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 shadow-xl">

              <div className="flex items-center gap-5">

                {/* Profile Image */}
                <div className="relative shrink-0">

                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#22C55E] bg-[#09090B]">
                    <img
                      src={profileImage}
                      alt="Hardik"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Status */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#22C55E] border-4 border-[#18181B]" />

                </div>

                {/* Profile Info */}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Hardik Chadha
                  </h2>

                  <p className="mt-1 text-[#22C55E] text-sm font-medium">
                    Frontend Developer
                  </p>

                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    React • JavaScript • AI
                  </p>
                </div>

              </div>

            </div>

            {/* Personal Information */}
            <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-7 divide-y divide-[#27272A] shadow-xl">

              {aboutInfo.map((item) => (
                <InfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}

            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default About;