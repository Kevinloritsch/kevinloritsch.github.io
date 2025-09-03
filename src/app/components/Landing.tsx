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
          "linear-gradient(to bottom, #C7BED3 0%, #C4BED5 16%, #E4BBB7 32%, #FEBF94 48%, #FEC68F 64%, #FEE2C7 85%, white 100%)",
      }}
    >
      <Element name="home">
        <div className="absolute flex h-full w-full flex-row items-center justify-center gap-12">
          <div className="flex w-2/3 flex-row justify-evenly">
            <div className="fex flex-col">
              <p className="flex h-1/3 place-items-center justify-center border-b-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                Kevin Loritsch
              </p>
              <p>UCR Student and Software Engineer</p>
              {socialLinks.map(({ link, icon: Icon }, i) => (
                <Link key={i} href={link}>
                  <Icon />
                </Link>
              ))}
            </div>
            <Image
              src={profilePicture}
              alt="Kevin Loritsch"
              className="w-1/2"
            />
          </div>
        </div>
      </Element>
    </div>
  );
};
export default Landing;
