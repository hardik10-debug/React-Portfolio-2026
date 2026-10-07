import React from "react";
import projectsData from "../data/projectsData";
import Button from "../components/Button";

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#09090B] text-[#A1A1AA] pt-16">

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">

        {/* Section Heading */}
        <div className="mb-14">

          <p className="text-[#22C55E] font-semibold tracking-[0.2em] text-sm uppercase">
            PROJECTS
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-[#A1A1AA] text-lg">
            A selection of projects I've worked on using modern web
            technologies, APIs and AI-powered tools.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projectsData.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-[#27272A] bg-[#18181B] overflow-hidden hover:border-[#22C55E]/50 transition"
            >

              {/* Image Placeholder */}
              <div className="h-56 bg-[#09090B] flex items-center justify-center border-b border-[#27272A]">
                <span className="text-[#52525B] text-sm">
                  Project Screenshot
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>

                {project.details && (
                  <p className="mt-3 text-[#A1A1AA] leading-relaxed">
                    {project.details}
                  </p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                {(project.github || project.live) && (
                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.github && (
                      <Button
                        href={project.github}
                        variant="secondary"
                      >
                        GitHub ↗
                      </Button>
                    )}

                    {project.live && (
                      <Button href={project.live}>
                        Live Demo ↗
                      </Button>
                    )}

                  </div>
                )}

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;