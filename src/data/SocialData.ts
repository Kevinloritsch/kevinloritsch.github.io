import { FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IconType } from "react-icons";

interface SocialLink {
  link: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { link: "https://github.com/Kevinloritsch", icon: FaGithub },
  { link: "https://www.linkedin.com/in/kevin-loritsch/", icon: FaLinkedin },
  { link: "/KevinLoritsch_Resume.pdf", icon: FaNewspaper },
  { link: "mailto:klori003@ucr.edu", icon: MdOutlineMarkEmailRead },
];

export { socialLinks };
