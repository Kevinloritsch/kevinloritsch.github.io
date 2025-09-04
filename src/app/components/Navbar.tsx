"use client";
import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useState, useEffect } from "react";

import navbarItems from "@/data/NavbarData";

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
    <div className="fixed left-0 top-0 z-50 flex h-[10vh] w-full cursor-pointer justify-evenly bg-white px-8 shadow-xl">
      <div className="flex w-1/2 flex-row items-center gap-4 text-left">
        <Link href="/">
          <p className="font-bold">Kevin Loritsch</p>
        </Link>
      </div>
      <div className="flex w-1/2 flex-row items-center justify-end text-right">
        {navbarItems.map(({ name, link }, i) => (
          <motion.div {...fadeIn(i / 5)} key={i}>
            <motion.div className="pr-4" {...hoverAnimation}>
              <ScrollLink
                to={link}
                smooth={true}
                offset={-pixels}
                duration={500}
              >
                {name}
              </ScrollLink>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
