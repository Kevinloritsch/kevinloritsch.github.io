"use client";
import Landing from "@/app/components/Landing";
import About from "@/app/components/About";
import Experiences from "@/app/components/Experiences";
import Projects from "@/app/components/Projects";

const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Experiences />
      <Projects />
    </div>
  );
};

export default Home;
