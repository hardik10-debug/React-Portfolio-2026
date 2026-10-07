import React from "react";
import experience from "../data/experience";

const Experience = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* Section Label */}
        <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
          EXPERIENCE
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 max-w-3xl text-white">
          My professional journey.
        </h2>

        {/* Experience Timeline */}
        <div className="relative mt-12 border-l border-[#27272A]">

          {experience.map((item) => (
            <div
              key={item.company}
              className="relative pl-8 md:pl-10 pb-12 last:pb-0"
            >

              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#22C55E]" />

              {/* Duration */}
              <p className="text-sm md:text-base text-[#22C55E] font-medium">
                {item.duration}
              </p>

              {/* Role */}
              <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white">
                {item.role}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-3 mt-2">

                <img
                  src={item.image}
                  alt={`${item.company} logo`}
                  className="w-12 h-12 object-contain rounded-2xl bg-white p-1"
                />

                <p className="text-[#D4D4D8] font-medium">
                  {item.company}
                </p>

              </div>

              {/* Responsibilities */}
              <ul className="mt-5 space-y-3 text-[#A1A1AA] leading-7 list-disc pl-5">

                {item.description.map((point, index) => (
                  <li key={index}>
                    {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
};

export default Experience;