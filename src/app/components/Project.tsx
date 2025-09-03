"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface projectProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Projects = ({ image, title, description }: projectProps) => {
  return (
    <div className="mx-8">
      <p className="text-center text-xl font-bold">{title}</p>
      <div className="mb-4 text-center">Deploy Links</div>

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
          <p className="text-sm text-white">{description}</p>
        </motion.div>
      </motion.div>
      <div className="flex flex-row justify-evenly pt-3">
        <div className="mr-auto">Tech Stack</div>
        <div className="ml-auto">Role on Project</div>
      </div>
    </div>
  );
};

export default Projects;
