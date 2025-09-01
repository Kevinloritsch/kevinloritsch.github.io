"use client";
import Image from "next/image";

import profilePicture from "@/public/profilePicture.png";
import { useEffect, useState } from "react";

import landingMountains from "@/public/landingMountains.svg";

const Landing = () => {
  const [darkFactor, setDarkFactor] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = Math.min(scrollTop / maxScroll, 1);
    setDarkFactor(scrollRatio);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientBackground = `linear-gradient(
    180deg,
    rgba(254, 205, 138, 1) 21.45%,
    rgba(254, 191, 148, 1) 41.09%,
    rgba(${228 - darkFactor * 100}, ${187 - darkFactor * 120}, ${183 + darkFactor * 50}, 1) 66.15%,
    rgba(${196 - darkFactor * 110}, ${190 - darkFactor * 125}, ${213 + darkFactor * 40}, 1) 86.34%,
    rgba(${196 - darkFactor * 120}, ${190 - darkFactor * 125}, ${213 + darkFactor * 40}, 1)
  )`;

  return (
    <div
      className="relative h-[90vh] w-full"
      style={{ background: gradientBackground }}
    >
      <div className="absolute flex h-full w-full flex-row items-center justify-center gap-12">
        <div className="flex w-2/3 flex-row justify-evenly">
          <Image src={profilePicture} alt="Kevin Loritsch" />
          <div className="fex flex-col">
            <p className="flex h-1/3 place-items-center justify-center border-b-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
              Kevin Loritsch
            </p>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <Image
          src={landingMountains}
          alt="mountain border"
          className="h-1/3 w-full"
        />
      </div>
    </div>
  );
};
export default Landing;
