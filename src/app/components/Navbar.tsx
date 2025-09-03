"use client";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import navbarItems from "@/data/NavbarData";

import profilePicture from "@/public/profilePicture.webp";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const hoverAnimation = {
  whileHover: { scale: 1.05 },
  transition: {
    duration: 0.6,
  },
};

const Navbar = () => {
  return (
    <div className="mx-8 flex h-[10vh] justify-evenly">
      <div className="flex w-1/2 flex-row items-center gap-4 text-left">
        <Image src={profilePicture} alt="Kevin Loritsch" className="w-1/12" />
        <p className="font-bold">Kevin Loritsch</p>
      </div>
      <div className="font flex w-1/2 flex-row items-center justify-end text-right">
        {navbarItems.map(({ name, link }, i) => (
          <motion.div {...fadeIn(i / 5)}>
            <motion.div key={i} className="pr-4" {...hoverAnimation}>
              <Link href={link}> {name}</Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
