import { FaGithub, FaLinkedin, FaNewspaper } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IconType } from "react-icons";

interface SocialLink {
  link: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  { link: "/meow", icon: FaGithub },
  { link: "/meow", icon: FaLinkedin },
  { link: "/meow", icon: MdOutlineMarkEmailRead },
  { link: "/meow", icon: FaNewspaper },
];

export { socialLinks };
