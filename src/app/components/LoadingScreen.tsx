import React from "react";
import ReactLoading from "react-loading";

const LoadingScreen = () => {
  const gradientBackground = `linear-gradient(180deg, #FECD8A 21.45%, #FEBF94 41.09%, #E4BBB7 66.15%, #C4BED5 86.34%, #C7BED3 97.03%)`;

  return (
    <div
      className="flex h-[100vh] place-content-center items-center"
      style={{ background: gradientBackground }}
    >
      <ReactLoading type="bubbles" color="#8072cb" height={250} width={125} />
    </div>
  );
};

export default LoadingScreen;
