"use client";

import Image, { StaticImageData } from "next/image";

interface DescriptionEntry {
  description: string;
}

interface ExperienceEntry {
  name: string;
  date: string;
  description: DescriptionEntry[];
}

interface experienceProps {
  image: StaticImageData;
  name: string;
  entries: ExperienceEntry[];
}

const Experience = ({ image, name, entries }: experienceProps) => {
  return (
    <div className="mx-auto w-2/3">
      <p className="text-left text-xl font-bold">{name}</p>

      <div className="flex w-full flex-row gap-4">
        <div className="w-1/5">
          <Image
            src={image}
            alt={name}
            className="aspect-square w-full rounded-2xl shadow-xl"
          />
        </div>
        <div className="w-full justify-center">
          {entries.map(({ name, date, description }, i) => (
            <div
              key={i}
              className="border-gray relative flex flex-row border-l py-2"
            >
              <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-gray-500" />
              <div className="mx-4">
                {name}
                <div>{date}</div>
                <div>
                  {description.map(({ description }, i) => (
                    <div key={i}>{description}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
