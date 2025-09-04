"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Element } from "react-scroll";

import profilePicture from "@/public/profilePicture.webp";

import { socialLinks } from "@/data/SocialData";

const hoverAnimation = {
  whileHover: { scale: 1.07 },
  transition: {
    duration: 0.4,
  },
};

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay },
});

const slideLeft = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.0 },
};

const slideRight = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.0 },
};

const Landing = () => {
  return (
    <div
      className="relative mt-[8vh] h-[90vh] w-full"
      style={{
        background:
          "linear-gradient(to bottom, #C7BED3 0%, #C4BED5 16%, #E4BBB7 32%, #FEBF94 48%, #FEC68F 64%, #FEE2C7 90%, white 100%)",
      }}
    >
      <Element name="home">
        <div className="absolute flex h-full w-full flex-row items-center justify-center gap-12">
          <div className="flex w-2/3 flex-row justify-evenly">
            <div className="flex w-2/3 flex-col">
              <p className="flex pb-2 text-left text-4xl font-bold md:text-5xl lg:text-6xl">
                Kevin Loritsch
              </p>

              <div className="mr-auto flex w-fit flex-row gap-4 border-t-2 border-black px-4 pt-2">
                {socialLinks.map(({ link, icon: Icon }, i) => (
                  <motion.div {...slideIn(i / 5)} key={i}>
                    <Link href={link} target="_blank">
                      <motion.div {...hoverAnimation}>
                        <Icon className="text-2xl" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.p {...slideLeft} className="py-4">
                Hi! My name is Kevin, and I am a Computer Science student at UC
                Riverside (Chancellor's Scholar, 4.0 GPA) with experience in
                software engineering, research, and teaching.
              </motion.p>
              <motion.p {...slideLeft}>
                I'm interested in exploring work in algorithm design, AI,
                research, and teaching.
              </motion.p>
            </div>
            <motion.div {...slideRight} className="w-1/3">
              <Image
                src={profilePicture}
                alt="Kevin Loritsch"
                className="w-3/4"
              />
            </motion.div>
          </div>
        </div>
      </Element>
    </div>
  );
};
export default Landing;
