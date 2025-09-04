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
  subtitle?: string;
}

const Header = ({ title, subtitle }: headerProps) => {
  return (
    <div className="text-center">
      <motion.div {...moveDown} className="text-4xl font-bold">
        {title}
      </motion.div>
      {subtitle && (
        <div className="text-2xl text-gray-500">
          <TypeAnimation
            sequence={[subtitle, 2000, "", 100]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
