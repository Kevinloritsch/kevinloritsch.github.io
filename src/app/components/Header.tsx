import { TypeAnimation } from "react-type-animation";

interface headerProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: headerProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold">{title}</div>
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
