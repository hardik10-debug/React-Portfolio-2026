import React from "react";
import InfoCard from "../components/InfoCard";
import aboutInfo from "../data/about";
import Button from "../components/Button";

const About = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">

          {/* Left Side */}
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

            <div className="mt-10">
              <Button
                href="https://drive.google.com/file/d/1Z9pvBK2hPcYqqeQHEzIxwSG5bs3di7Z2/view?usp=drive_link"
              >
                View Resume
              </Button>
            </div>

          </div>

          {/* Right Side */}
          <div>
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