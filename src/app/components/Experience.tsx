"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

const hoverAnimation = {
  whileHover: { scale: 1.06 },
  transition: {
    duration: 0.4,
  },
};

const moveUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
  },
};

const fadeIn = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.7,
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
  },
};

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

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
          <motion.p {...moveUp} className="text-center text-3xl font-bold">
            {name}
          </motion.p>
          <motion.div {...hoverAnimation} {...fadeIn}>
            <Image
              src={image}
              alt={name}
              className="mx-auto aspect-square w-2/3 rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
        <div className="border-gray w-5/6 justify-center border-l-2">
          {entries.map(({ name, date, description }, i) => (
            <motion.div
              {...slideIn(i / 3)}
              key={i}
              className="relative flex flex-row py-2"
            >
              <div className="absolute -left-1.5 top-4 h-3 w-3 rounded-full bg-gray-500" />
              <div className="mx-4">
                <motion.div className="flex flex-row justify-evenly">
                  <p className="mr-auto text-lg underline">{name}</p>
                  <motion.p {...fadeUp} className="ml-auto text-gray-500">
                    {date}
                  </motion.p>
                </motion.div>
                <div>
                  {description.map(({ description }, j) => (
                    <motion.p {...slideIn(i / 3 + (1.5 * j) / 9)} key={j}>
                      {description}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
