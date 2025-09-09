import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IconType } from "react-icons";

interface SocialLink {
  link: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { link: "https://github.com/Kevinloritsch", icon: FaGithub },
  { link: "https://www.linkedin.com/in/kevin-loritsch/", icon: FaLinkedin },
  { link: "/Kevin_Loritsch_Resume.pdf", icon: LuFileSpreadsheet },
  { link: "mailto:klori003@ucr.edu", icon: MdOutlineMarkEmailRead },
];

export { socialLinks };
