export interface Project {
  name: string;
  description: string;
  technologies: Technology[];
  category: string;
  image?: string;
  repoLink?: string;
  demoLink?: string;
  collaborator?: Collaborator;
  favorite: boolean;
}

interface Collaborator {
  name: string;
  github: string;
}

type Technology = "CSS" | "HTML" | "JavaScript" | "Lua" | "Python" | "React" | "Redux" | "TailwindCSS" | "Typer";

export const projects: Project[] = [
  {
    name: "Coin Watcher",
    description: "Web application for consulting crypto prices and news.",
    technologies: ["React", "TailwindCSS"],
    category: "web",
    image: "/images/coin-watcher.png",
    repoLink: "https://github.com/piero-vic/coin-watcher",
    demoLink: "https://piero-vic-coin-watcher.netlify.app/",
    favorite: true,
  },
  {
    name: "Space Traveler's Hub",
    description: "Single-page application that displays SpaceX rockets and missions.",
    technologies: ["React", "Redux"],
    category: "web",
    image: "/images/space-hub.png",
    repoLink: "https://github.com/Amrhub/space-travelers-hub",
    demoLink: "https://space-travelers-hub-pa.netlify.app/",
    collaborator: {
      name: "Amr Ahmed",
      github: "https://github.com/Amrhub",
    },
    favorite: false,
  },
  {
    name: "Coding Bootcamp Webpage",
    description: "Capstone project for Module 1 of Microverse.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: "/images/coding-bootcamp.png",
    repoLink: "https://github.com/piero-vic/coding-bootcamp-website",
    demoLink: "https://piero-vic.github.io/coding-bootcamp-website/",
    favorite: false,
  },
  {
    name: "cmp-ledger",
    description: "A nvim-cmp source for ledger accounts.",
    technologies: ["Lua"],
    category: "cli",
    repoLink: "https://github.com/piero-vic/cmp-ledger",
    favorite: true,
  },
  {
    name: "ptd",
    description: "A minimal to-do list application for the command line.",
    technologies: ["Python", "Typer"],
    category: "cli",
    repoLink: "https://github.com/piero-vic/ptd",
    favorite: true,
  },
  {
    name: "ani-py",
    description: "A cli tool to download and stream anime from jkanime.",
    technologies: ["Python", "Typer"],
    category: "cli",
    repoLink: "https://github.com/piero-vic/ani-py",
    favorite: false,
  },
];

export const colors: Record<Technology, string> = {
  CSS: "text-cyan",
  HTML: "text-red",
  JavaScript: "text-yellow",
  Lua: "text-magenta",
  Python: "text-green",
  React: "text-blue",
  Redux: "text-magenta",
  TailwindCSS: "text-blue",
  Typer: "text-white",
};
