import React from "react";
import FooterInterface from "../types/FooterInterface";

const FooterItem: React.FC<FooterInterface> = ({ name, link, icon: Icon }) => {
  return (
    <div className="text-sm text-slate-100 font-bold hover:text-slate-400">
      <a href={link} target="_blank" rel="noreferrer" aria-label={name}>
        <Icon size={32} />
      </a>
    </div>
  );
};
export default FooterItem;
