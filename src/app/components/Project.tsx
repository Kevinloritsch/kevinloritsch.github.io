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
      <p className="text-center text-xl font-bold">{title}</p>
      <div className="my-1">
        <div className="mx-auto mb-3 flex flex-row justify-center gap-2">
          {links.map(({ icon: Icon, link }, i) => (
            <Link href={link} target="_blank" key={i}>
              <Icon className="text-xl" />
            </Link>
          ))}
        </div>
      </div>

      <motion.div
        className="group relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl"
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.2, scale: 1.1 }}
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
            <div key={i} className="w-full">
              <Icon className="text-xl" />
            </div>
          ))}
        </div>

        <div className="ml-auto pr-4">{role}</div>
      </div>
    </div>
  );
};

export default Project;
