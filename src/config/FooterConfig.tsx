import FooterInterface from "../types/FooterInterface";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Components/icons/BrandIcons";

const footerItems: FooterInterface[] = [
  {
    name: "Email",
    link: "mailto:spmseanmurray@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/spmseanmurray/",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    link: "https://github.com/spmseanmurray",
    icon: GithubIcon,
  },
];
export default footerItems;
