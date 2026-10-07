import React from "react";
import education from "../data/education";

const Education = () => {
  return (
    <main className="bg-slate-900 text-slate-50">
      <section
        id="education"
        className="scroll-mt-20 max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-16"
      >
        {/* Section Heading */}
        <p className="text-blue-400 font-semibold tracking-[0.2em] text-sm uppercase">
          EDUCATION
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
          My Academic Journey
        </h2>

        {/* Education Cards */}
        <div className="mt-8 space-y-4">
          {education.map((item) => (
            <div
              key={item.institution}
              className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
            >
              {/* Image */}
              <div className="w-full sm:w-60 md:w-64 h-48 sm:h-36 shrink-0">
                <img
                  src={item.image}
                  alt={item.institution}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold">
                  {item.degree}
                </h3>

                {item.field && (
                  <p className="text-blue-400 text-sm font-medium mt-2">
                    {item.field}
                  </p>
                )}

                <p className="text-slate-300 text-sm mt-3">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="text-slate-400 text-sm mt-1">
                    {item.location}
                  </p>
                )}

                {item.grade && (
                  <p className="text-slate-400 text-sm mt-2">
                    {item.grade}
                  </p>
                )}

                <div className="mt-4">
                  <span className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
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