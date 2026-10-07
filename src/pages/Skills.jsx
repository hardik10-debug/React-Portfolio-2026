import React from "react";
import skillsData from "../data/skillsData";

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* Section Heading */}
        <div className="mb-14">

          <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
            SKILLS
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-[#A1A1AA] text-lg">
            A collection of technologies and tools I use to build
            responsive, interactive and scalable web experiences.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillsData.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[#27272A] bg-[#18181B] p-7 hover:border-[#22C55E]/50 transition"
            >

              <h3 className="text-xl font-semibold text-[#22C55E] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[#09090B] text-[#D4D4D8] border border-[#27272A] hover:border-[#22C55E] hover:text-[#22C55E] transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;