import React from "react";
import FooterItem from "./FooterItem";
import RailRow from "./RailRow";
import footerItems, { contact } from "../config/FooterConfig";

/**
 * The page's closing rail row.
 *
 * Built on `RailRow` rather than its own layout on purpose: dates, employers
 * and skill categories all hang off the same spine, so ending on one more rail
 * row makes the footer read as the last row of the page rather than a separate
 * object bolted underneath it.
 */
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-rule bg-ground">
      <div className="mx-auto w-full max-w-6xl px-5 py-11">
        <RailRow label="Contact">
          <div className="flex flex-col items-start gap-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="border-b border-rule pb-0.5 font-display text-xl font-semibold tracking-tight text-accent transition-colors hover:text-ink sm:text-2xl"
            >
              {contact.email}
            </a>

            <p className="flex items-center gap-x-2 text-sm text-muted">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {contact.availability}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-3">
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
        </RailRow>
      </div>
    </footer>
  );
};

export default Footer;
