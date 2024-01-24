import React from "react";
import FooterItem from "./FooterItem";
import footerItems from "../config/FooterConfig";

const Footer: React.FC = () => {
  return (
    <div id="contact" className="bg-neutral-900 opacity-90 w-full">
      <div className="border-t-2 border-slate-500 mx-6">
        <div className="flex justify-evenly px-3 py-2">
          {footerItems.map((item) => (
            <FooterItem
              key={item.name}
              name={item.name}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
