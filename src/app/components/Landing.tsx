"use client";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

import profilePicture from "@/public/profilePicture.webp";

import { socialLinks } from "@/data/SocialData";

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
              <p className="flex place-items-center justify-center pb-2 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                Kevin Loritsch
              </p>

              <div className="mx-auto flex w-fit flex-row gap-4 border-t-2 border-black px-4 pt-2">
                {socialLinks.map(({ link, icon: Icon }, i) => (
                  <Link key={i} href={link} target="_blank">
                    <Icon className="text-4xl" />
                  </Link>
                ))}
              </div>
              <p className="py-4">
                Hi! My name is Kevin, and I am a Computer Science student at UC
                Riverside (Chancellor's Scholar, 4.0 GPA) with experience in
                software engineering, research, and teaching.
              </p>
              <p>
                I'm interested in exploring work in algorithm design, AI,
                research, and teaching.
              </p>
            </div>
            <div className="w-1/3">
              <Image
                src={profilePicture}
                alt="Kevin Loritsch"
                className="w-3/4"
              />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};
export default Landing;
