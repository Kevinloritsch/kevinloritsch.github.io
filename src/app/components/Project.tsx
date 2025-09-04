"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { IconType } from "react-icons";
import Link from "next/link";

interface techEntry {
  icon: IconType;
}

interface linkEntry {
  icon: IconType;
  link: string;
}

interface projectProps {
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  role: string;
  techStack: techEntry[];
  links: linkEntry[];
}

const hoverAnimation = {
  whileHover: { scale: 1.1 },
  transition: {
    duration: 0.4,
  },
};

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay },
});

const moveDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const moveUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const Project = ({
  image,
  title,
  description,
  date,
  role,
  techStack,
  links,
}: projectProps) => {
  return (
    <div className="mx-8">
      <motion.p {...moveUp} className="text-center text-xl font-bold">
        {title}
      </motion.p>
      <div className="my-1">
        <div className="mx-auto mb-3 flex flex-row justify-center gap-2">
          {links.map(({ icon: Icon, link }, i) => (
            <motion.div {...hoverAnimation} {...slideIn(i / 3)} key={i}>
              <Link href={link} target="_blank">
                <Icon className="text-xl" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="group relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl"
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 1.05, rotate: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.2, scale: 1.1 }}
          whileTap={{ opacity: 0.2, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/70 p-6 text-center"
          style={{ backdropFilter: "blur(6px)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 1 }}
        >
          <div className="flex flex-col gap-y-4 text-sm text-white">
            <p>{date}</p>
            <p>{description}</p>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex flex-row justify-evenly pt-3">
        <div className="mr-auto flex flex-row gap-2 pl-4">
          {techStack.map(({ icon: Icon }, i) => (
            <motion.div {...hoverAnimation} {...slideIn(i / 4)} key={i}>
              <Icon className="text-xl" />
            </motion.div>
          ))}
        </div>

        <motion.p {...moveDown} className="ml-auto pr-4">
          {role}
        </motion.p>
      </div>
    </div>
  );
};

export default Project;
