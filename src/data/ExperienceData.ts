import { StaticImageData } from "next/image";
import ACMLogo from "@/public/experiences/acmLogo.png";
import UCRLogo from "@/public/experiences/ucrLogo.png";

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
    image: UCRLogo,
    name: "UCR",
    entries: [
      {
        name: "Computer Science Education Research Assistant",
        date: "May 2025 - Present",
        description: [
          {
            description:
              "• Authored abstract and poster presentation analyzing 500+ student-created study sheets to assess impact on learning outcomes and academic performance",
          },
          {
            description:
              "• Engineered end-to-end data pipeline using Python, Pandas, Matplotlib, and Scikit-Learn to extract, clean, and analyze study behaviors",
          },
          {
            description:
              "• Collaborated on research methodology design, defining classification schema for categorizing study materials",
          },
        ],
      },
      {
        name: "Undergraduate Learning Assistant",
        date: "Oct 2024 - Present",
        description: [
          {
            description:
              "• Facilitated instruction in foundational C++ courses through weekly labs and 1:1 tutoring, reinforcing concepts in pointers, data structures, and debugging",
          },
          {
            description:
              "• Delivered 12+ hours/week of student support, improving retention and performance for classes of 100+ students",
          },
          {
            description:
              "• Enhanced programming proficiency by guiding students through coding assignments and debugging strategies",
          },
        ],
      },
      {
        name: "Data Structures and Algorithms Grader",
        date: "Oct 2024 - Present",
        description: [
          {
            description:
              "• Evaluated 13+ programming assignments for 500+ students in C++ data structures and algorithms",
          },
          {
            description:
              "• Held weekly office hours to clarify core concepts such as B-Trees, graph theory, and asymptotic analysis",
          },
          {
            description:
              "• Managed 5-person dev team building a class learning platform, from Figma prototype to deployment",
          },
        ],
      },
    ],
  },
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
              "• Directed front end development projects, coordinating with on campus organizations to transform design",
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
