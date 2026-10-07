import React from "react";
import education from "../data/education";

const Education = () => {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* Section Heading */}
        <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
          EDUCATION
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 text-white">
          My Academic Journey
        </h2>

        {/* Education Cards */}
        <div className="mt-10 space-y-5">

          {education.map((item) => (
            <div
              key={item.institution}
              className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B] hover:border-[#22C55E]/50 transition"
            >

              {/* Image */}
              <div className="w-full sm:w-64 md:w-72 lg:w-80 shrink-0">
                <img
                  src={item.image}
                  alt={`${item.institution} campus`}
                  className="w-full h-52 sm:h-full min-h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">

                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {item.degree}
                </h3>

                {item.field && (
                  <p className="text-[#22C55E] text-sm md:text-base font-medium mt-2">
                    {item.field}
                  </p>
                )}

                <p className="text-[#D4D4D8] text-sm md:text-base mt-4">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="text-[#A1A1AA] text-sm md:text-base mt-1">
                    {item.location}
                  </p>
                )}

                {item.grade && (
                  <p className="text-[#A1A1AA] text-sm md:text-base mt-2">
                    {item.grade}
                  </p>
                )}

                <div className="mt-5">
                  <span className="inline-flex px-4 py-2 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-xs md:text-sm font-medium border border-[#22C55E]/20">
                    {item.duration}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
};

export default Education;