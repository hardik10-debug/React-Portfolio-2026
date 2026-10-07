import React from "react";
import InfoCard from "../components/InfoCard";
import aboutInfo from "../data/about";
import Button from "../components/Button";

const About = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-slate-50">
        <section 
        id="about"
        className=" scroll-mt-20 max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-10">
          
          <div 
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">

            {/* Left side */}
            <div>
              <p className="text-blue-400 font-semibold tracking-[0.2em] text-sm uppercase">
                ABOUT ME
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
                Frontend Developer building modern web applications and
                AI-powered experiences.
              </h1>

              <div className="mt-8 space-y-5 text-slate-400 leading-7 max-w-2xl">
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
                  className="px-8"
                >
                  View Resume ↗
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-7 divide-y divide-slate-800 shadow-lg">
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
    </>
  );
};

export default About;