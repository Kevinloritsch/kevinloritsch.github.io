import { StaticImageData } from "next/image";
import ULA from "@/public/projects/ula.webp";
import Tree from "@/public/projects/tree.webp";
import FinalTake from "@/public/projects/finalTake.webp";
import PTSO from "@/public/projects/ptso.webp";
import Chess from "@/public/projects/chess.webp";
import AviatR from "@/public/projects/aviatr.webp";
import Leap from "@/public/projects/leap.webp";
import SquareRoot from "@/public/projects/squareRoot.webp";

interface ProjectItem {
  image: StaticImageData;
  title: string;
  description: string;
}

const projectItems: ProjectItem[] = [
  {
    image: ULA,
    title: "ULA Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Tree,
    title: "Data Structures Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: PTSO,
    title: "PTSO Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: FinalTake,
    title: "Hackathon Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: AviatR,
    title: "Aviat'R Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Chess,
    title: "Parallelized Chess",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: Leap,
    title: "Leap Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: SquareRoot,
    title: "Quick Magic Square Root",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default projectItems;
