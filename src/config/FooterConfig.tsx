import FooterInterface from "../types/FooterInterface";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const footerItems: FooterInterface[] = [
  {
    name: "email",
    link: "mailto:spmseanmurray@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/spmseanmurray/",
    icon: faLinkedin,
  },
  {
    name: "github",
    link: "https://github.com/spmseanmurray",
    icon: faGithub,
  },
];
export default footerItems;
