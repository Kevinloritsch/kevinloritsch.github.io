"use client";
import { useState, useEffect } from "react";
import Landing from "@/app/components/Landing";
import About from "@/app/components/About";
import LoadingScreen from "@/app/components/LoadingScreen";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Landing />
          <About />
        </div>
      )}
    </ParallaxProvider>
  );
};

export default Home;
