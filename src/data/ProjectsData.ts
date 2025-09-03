import { StaticImageData } from "next/image";
import ULA from "@/public/projects/ula.png";
import Tree from "@/public/projects/tree.png";
import FinalTake from "@/public/projects/finalTake.png";
import PTSO from "@/public/projects/ptso.png";
import Chess from "@/public/projects/chess.png";
import AviatR from "@/public/projects/aviatr.png";
import Leap from "@/public/projects/leap.png";
import SquareRoot from "@/public/projects/squareRoot.png";

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
