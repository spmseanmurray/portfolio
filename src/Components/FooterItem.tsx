import React from "react";
import FooterInterface from "../types/FooterInterface";

const FooterItem: React.FC<FooterInterface> = ({ name, link, icon: Icon }) => {
  // A mailto hands off to the OS mail handler; opening it in a blank tab just
  // strands an empty one. Everything else is a profile or a document, and
  // should leave the portfolio open behind it.
  const isMailto = link.startsWith("mailto:");

  return (
    <a
      href={link}
      {...(isMailto ? {} : { target: "_blank", rel: "noreferrer" })}
      className="inline-flex items-center gap-x-2 text-sm text-muted transition-colors hover:text-accent"
    >
      {/* The brand marks carry their own <title>, which would otherwise be
          announced a second time alongside the visible label. */}
      <span aria-hidden="true" className="flex">
        <Icon size={17} />
      </span>
      {name}
    </a>
  );
};
export default FooterItem;
