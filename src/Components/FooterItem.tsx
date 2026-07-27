import React from "react";
import FooterInterface from "../types/FooterInterface";

const FooterItem: React.FC<FooterInterface> = ({ name, link, icon: Icon }) => {
  const isExternal = link.startsWith("http");
  return (
    <a
      href={link}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      aria-label={name}
      className="text-muted transition-colors hover:text-accent"
    >
      <Icon size={26} />
    </a>
  );
};
export default FooterItem;
