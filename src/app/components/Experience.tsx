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
      <div className="flex w-full flex-row gap-4">
        <div className="w-1/6">
          <p className="text-center text-3xl font-bold">{name}</p>
          <Image
            src={image}
            alt={name}
            className="mx-auto aspect-square w-2/3 rounded-2xl shadow-xl"
          />
        </div>
        <div className="border-gray w-5/6 justify-center border-l-2">
          {entries.map(({ name, date, description }, i) => (
            <div key={i} className="relative flex flex-row py-2">
              <div className="absolute -left-1.5 top-4 h-3 w-3 rounded-full bg-gray-500" />
              <div className="mx-4">
                <div className="flex flex-row justify-evenly">
                  <p className="mr-auto text-lg underline">{name}</p>
                  <p className="ml-auto text-gray-500">{date}</p>
                </div>
                <div>
                  {description.map(({ description }, i) => (
                    <p key={i}>{description}</p>
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
