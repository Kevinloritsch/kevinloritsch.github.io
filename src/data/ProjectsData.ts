import { StaticImageData } from "next/image";
import ULA from "@/public/projects/ula.webp";
import Tree from "@/public/projects/tree.webp";
import FinalTake from "@/public/projects/finalTake.webp";
import PTSO from "@/public/projects/ptso.webp";
import Chess from "@/public/projects/chess.webp";
import AviatR from "@/public/projects/aviatr.webp";
import Leap from "@/public/projects/leap.webp";
import SquareRoot from "@/public/projects/squareRoot.webp";
import { IconType } from "react-icons";

import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPrettier,
  SiShadcnui,
} from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";

interface techEntry {
  icon: IconType;
}
interface ProjectItem {
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  role: string;
  techStack?: techEntry[];
}

const projectItems: ProjectItem[] = [
  {
    image: ULA,
    title: "ULA Website",
    date: "September 2025",
    description:
      "Served as Scrum Master and Project Lead on behalf of ACM@UCR to develop UCR's Website for Undergraduate Learning Assistants.",
    role: "Lead",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
    ],
  },
  {
    image: Tree,
    title: "Data Structures Website",
    date: "In Progress",
    description:
      "Served as Scrum Master and Project Lead to develop a website to assist students with understanding elementary Data Structures. Contains visualizations of BSTs, AVL Trees, Heaps, and Sorting Algorithms.",
    role: "Lead",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
      {
        icon: SiShadcnui,
      },
    ],
  },
  {
    image: PTSO,
    title: "PTSO Website",
    date: "June 2025",
    description:
      "Served as Scrum Master and Project Lead on behalf of ACM@UCR to develop UCR's Website for the Pre-Therapy Student Organization.",
    role: "Lead",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
    ],
  },
  {
    image: FinalTake,
    title: "Hackathon Game",
    date: "April 2025",
    description:
      "Our submission for Citrus Hack 2025. Helped develop a game where the user is a Movie Studio Executive, and has to make decisions that balance their budget while being environmentally friendly.",
    role: "Developer",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
      {
        icon: SiShadcnui,
      },
    ],
  },
  {
    image: Chess,
    date: "November 2024",
    title: "Parallelized Chess",
    description:
      "Developed parallelized AI chess engine implementing minimax with alpha-beta pruning. Optimized performance with pthreads, achieving 15x runtime improvement over sequential baseline",
    role: "Personal Project",
    techStack: [
      {
        icon: PiFileCpp,
      },
    ],
  },

  {
    image: AviatR,
    date: "December 2024",
    title: "Aviat'R Website",
    description:
      "Served as Scrum Master and Project Lead on behalf of ACM@UCR to develop UCR's Website for Aviat'R.",
    role: "Lead",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
    ],
  },

  {
    image: Leap,
    title: "Leap Website",
    date: "March 2025",
    description:
      "Served as Scrum Master and Project Lead on behalf of ACM@UCR to develop UCR's Website for Loving our Emotions as Asian and Pacific !slanders.",
    role: "Lead",
    techStack: [
      {
        icon: RiNextjsFill,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiTypescript,
      },
      {
        icon: SiTailwindcss,
      },
      {
        icon: FaFigma,
      },
      {
        icon: SiPrettier,
      },
      {
        icon: SiShadcnui,
      },
    ],
  },
  {
    image: SquareRoot,
    date: "January 2025",
    title: "Magic Square Root",
    description: "Implemented the Magic Square Root Formula.",
    role: "Personal Project",
    techStack: [
      {
        icon: PiFileCpp,
      },
    ],
  },
];

export default projectItems;
