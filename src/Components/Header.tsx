import React from "react";
import headerItems from "../config/HeaderConfig";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-ground/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-3 sm:justify-between">
        <a
          href="#top"
          className="font-display text-xl font-semibold text-ink transition-colors hover:text-accent"
        >
          Sean Murray
        </a>
        <div className="hidden items-center gap-x-6 sm:flex">
          {headerItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
