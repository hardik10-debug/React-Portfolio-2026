import hcp1 from "../assets/projects/hcp-1.png";
import hcp2 from "../assets/projects/hcp-2.png";
// import hcp3 from "../assets/projects/hcp-3.png";

import music0 from "../assets/projects/music-0.png";
import music1 from "../assets/projects/music-1.png";
import music2 from "../assets/projects/music-2.png";
import music3 from "../assets/projects/music-3.png";
import music4 from "../assets/projects/music-4.png";


const projectsData = [
  {
    title: "Intelligent HCP Relationship Hub",

    images: [hcp1, hcp2],

    description:
      "An AI-first Customer Relationship Management (CRM) module designed specifically for healthcare field representatives in the life sciences sector.",

    details:
      "Representatives can naturally dictate or type an encounter, while the backend agent automatically handles the data pipeline — parsing details, updating fields, performing sentiment classification, and locking structural rows into the database.",

    technologies: [
      "React.js",
      "Redux Toolkit",
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Groq",
      "Llama 3.3 70B",
      "PostgreSQL",
    ],

    github: "https://github.com/hardik10-debug/ai-first-crm-hcp-module",
    live: "",
  },

  {
    title: "Ghost Music Player",

    images: [music0, music1, music2, music3, music4],

    description:
      "A Music Player website built with React, featuring music playback and Spotify API integration.",

    technologies: ["React.js", "JavaScript", "Spotify API", "Node.js", "Express"],

    github: "https://github.com/hardik10-debug/music-player",
    live: "https://ghost-music-player.netlify.app/",
  },

  
];

export default projectsData;