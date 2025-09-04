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
    <div className="mx-auto w-3/4 md:w-2/3">
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="mx-auto hidden w-1/4 md:mx-0 md:flex md:w-1/6 md:flex-col">
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
        <div className="mx-auto w-1/2 md:mx-0 md:hidden md:w-1/6">
          <motion.div {...hoverAnimation} {...fadeIn}>
            <Image
              src={image}
              alt={name}
              className="mx-auto aspect-square w-2/3 rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.p {...moveUp} className="pt-2 text-center text-3xl font-bold">
            {name}
          </motion.p>
        </div>
        <div className="border-gray w-full justify-center border-l-2 md:w-5/6">
          {entries.map(({ name, date, description }, i) => (
            <motion.div
              {...slideIn(i / 3)}
              key={i}
              className="relative flex flex-row py-2"
            >
              <div className="absolute -left-1.5 top-4 h-3 w-3 rounded-full bg-gray-500" />
              <div className="mx-4">
                <motion.div className="flex flex-col justify-evenly md:flex-row">
                  <p className="mr-auto text-lg underline">{name}</p>
                  <motion.p {...fadeUp} className="text-gray-500 md:ml-auto">
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
