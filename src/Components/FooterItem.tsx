import React from "react";
import FooterInterface from "../types/FooterInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItem: React.FC<FooterInterface> = ({ link, icon }) => {
  return (
    <div className="text-sm text-slate-100 font-bold hover:text-slate-400">
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </div>
  );
};
export default FooterItem;
