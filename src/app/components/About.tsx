"use client";
// import { useParallax } from "react-scroll-parallax";

const About = () => {
  // const verticalDown = useParallax({
  //   speed: -6,
  // });
  // const verticalDownSlower = useParallax({
  //   speed: -9,
  // });
  return (
    <div
      className="h-[100vh] w-full"
      style={{
        background:
          "linear-gradient(0deg, rgba(85, 111, 218, 0.5) 0%, rgba(126, 152, 232, 0.5) 46.44%, rgba(191, 203, 243, 0.5) 66.3%, rgba(255, 255, 255, 0.5) 87.96%), " +
          "linear-gradient(180deg, #FFFFFF 8.53%, #FECD8A 19.96%, #FEBF94 31.39%, #E4BBB7 60.58%, #C4BED5 84.09%, #C7BED3 96.54%)",
        transform: "matrix(1, 0, 0, -1, 0, 0)",
      }}
    >
      {/* <div ref={verticalDown.ref} className="relative w-full">
        <svg
          className="absolute top-[1000px] origin-top"
          viewBox="0 0 1280 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(1, -1)"
        >
          <path
            d="M-130 0V217L-17.5 161.62L85.5 217L211 161.62L324.5 205.698L435 168.684L523.5 178.29L600 189.31L790.5 136.473L899 161.62L1046 128.279L1286 217V0H-130Z"
            fill="#384E74"
            fill-opacity="0.5"
          />
        </svg>
      </div>

      <div  className="relative w-full">
        <svg
          className="absolute top-[870px] origin-top -z-50"
          viewBox="0 0 1280 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(1, -1)"
        >
          <path
            d="M1410 0V252L1297.5 196.628L1194.5 252L1077.5 213.296L955 173.462L836 219.794L761 196.628L680 224.314L473.5 138.996L347 213.296L234 163.291C190.766 179.272 168.5 197.475 127.5 219.794C114 218.099 70 213.296 70 213.296C38.3463 224.996 29 234.767 -6 252V0H1410Z"
            fill="#737DA2"
            fill-opacity="0.2"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default About;
