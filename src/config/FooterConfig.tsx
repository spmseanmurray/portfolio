import FooterInterface from "../types/FooterInterface";
import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Components/icons/BrandIcons";

/**
 * The address and availability line that head the footer.
 *
 * Seniority, location and remote posture compress into one line: recruiters
 * filter on all three early, and splitting them across rows buries the answer.
 */
export const contact = {
  email: "spmseanmurray@gmail.com",
  availability: "Open to senior and staff roles · Boulder, CO or remote",
};

const footerItems: FooterInterface[] = [
  {
    name: "GitHub",
    link: "https://github.com/spmseanmurray",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/spmseanmurray/",
    icon: LinkedinIcon,
  },
  // Served straight out of public/. The file has to exist before this ships,
  // or the most valuable link in the footer is a 404.
  {
    name: "Resume",
    link: "/resume.pdf",
    icon: FileText,
  },
];
export default footerItems;
