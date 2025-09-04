"use client";
import { motion, AnimatePresence } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="fixed left-0 top-0 z-50 hidden h-[10vh] w-full cursor-pointer justify-evenly bg-white px-8 shadow-xl md:flex">
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
      <div className="fixed left-0 top-0 z-50 w-full bg-white shadow-md md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-2xl font-bold">
            Kevin Loritsch
          </Link>
          <button onClick={toggleMenu} className="text-3xl">
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <div
          className={`overflow-hidden bg-white transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-2 flex flex-col items-center gap-6 border-t-2 py-4 text-xl">
            {navbarItems.map(({ name, link }, i) => (
              <motion.div {...fadeIn(i / 5)} key={i}>
                <motion.div {...hoverAnimation}>
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
      </div>
    </div>
  );
};

export default Navbar;
