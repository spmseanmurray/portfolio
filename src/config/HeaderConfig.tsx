import HeaderInterface from "../types/HeaderInterface";

const headerItems: HeaderInterface[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

/**
 * The contact call to action, kept out of `headerItems` on purpose.
 *
 * That array drives the scroll spy, which highlights whichever section the
 * reader is currently inside and special-cases the last entry for the bottom
 * of the page. The footer is not a section, so adding it here would take over
 * that bottom-of-page case and leave Skills unable to highlight.
 */
export const contactItem: HeaderInterface = {
  name: "Contact",
  link: "#contact",
};

export default headerItems;
