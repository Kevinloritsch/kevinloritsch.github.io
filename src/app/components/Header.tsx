"use client";

import { TypeAnimation } from "react-type-animation";

import { motion } from "motion/react";

const moveDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
  },
};

interface headerProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
}

const Header = ({ title, subtitle1, subtitle2 }: headerProps) => {
  return (
    <div className="mt-6 text-center">
      <motion.div {...moveDown} className="text-4xl font-bold">
        {title}
      </motion.div>
      {subtitle1 && subtitle2 && (
        <div className="mx-auto justify-center text-center">
          <div className="mx-auto hidden text-2xl text-gray-500 md:block">
            <TypeAnimation
              sequence={[subtitle1, 2000, "", 100]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <div className="text-xl text-gray-500 md:hidden">
            <TypeAnimation
              sequence={[subtitle2, 2000, "", 100]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
