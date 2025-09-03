import { StaticImageData } from "next/image";
import ACMLogo from "@/public/experiences/acmLogo.png";

interface DescriptionEntry {
  description: string;
}

interface ExperienceEntry {
  name: string;
  date: string;
  description: DescriptionEntry[];
}

interface ExperienceItem {
  image: StaticImageData;
  name: string;
  entries: ExperienceEntry[];
}

const experienceItems: ExperienceItem[] = [
  {
    image: ACMLogo,
    name: "ACM@UCR",
    entries: [
      {
        name: "Spark LEad",
        date: "Oct 2023 - Present",
        description: [
          {
            description:
              "• Directed front end development projects, coordinating with on campus organizations to transform desig",
          },
          {
            description:
              "• Led teams of 10+ students as Scrum Master, facilitating sprint planning, code reviews, and AGILE development",
          },
          {
            description:
              "• Delivered production-ready websites using React, Tailwind, and HTML",
          },
        ],
      },
      {
        name: "VP External Affairs",
        date: "Oct 2023 - Present",
        description: [
          {
            description:
              "• Launched outreach initiatives including weekly tabling, coding workshops, and mentorship programs",
          },
          {
            description:
              "• Designed peer mentorship program pairing 25+ first-year students with experienced ACM mentors",
          },
        ],
      },
    ],
  },
];

export default experienceItems;
