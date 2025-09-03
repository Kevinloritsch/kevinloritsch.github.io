"use client";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";

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

const use10vhAsPixels = () => {
  const [pixels, setPixels] = useState(0);

  useEffect(() => {
    const calculatePixels = () => {
      const viewportHeight = window.innerHeight;
      setPixels((viewportHeight / 100) * 10);
    };

    calculatePixels();
    window.addEventListener("resize", calculatePixels);

    return () => {
      window.removeEventListener("resize", calculatePixels);
    };
  }, []);

  return pixels;
};

const Navbar = () => {
  const pixels = use10vhAsPixels();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-[10vh] cursor-pointer justify-evenly bg-white px-8 shadow-xl">
      <div className="flex w-1/2 flex-row items-center gap-4 text-left">
        <Image src={profilePicture} alt="Kevin Loritsch" className="w-1/12" />
        <p className="font-bold">Kevin Loritsch</p>
      </div>
      <div className="flex w-1/2 flex-row items-center justify-end text-right">
        {navbarItems.map(({ name, link }, i) => (
          <motion.div {...fadeIn(i / 5)} key={i}>
            <motion.div className="pr-4" {...hoverAnimation}>
              <Link to={link} smooth={true} offset={-pixels} duration={500}>
                {name}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
