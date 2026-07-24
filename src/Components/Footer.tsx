import React from "react";
import FooterItem from "./FooterItem";
import footerItems from "../config/FooterConfig";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-rule bg-ground">
      <div className="mx-auto flex w-full max-w-6xl justify-center gap-x-10 px-5 py-8">
        {footerItems.map((item) => (
          <FooterItem
            key={item.name}
            name={item.name}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
