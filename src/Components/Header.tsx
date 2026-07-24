import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import headerItems from "../config/HeaderConfig";

const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight whichever section currently occupies the upper band of the
  // viewport, so the nav reflects position without any scroll math.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const ids = headerItems.map((item) => item.link.replace("#", ""));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-ground/90 backdrop-blur">
      <nav className="mx-auto w-full max-w-5xl px-5">
        <div className="flex items-center justify-between py-3">
          <a
            href="#top"
            className="font-display text-lg font-semibold text-ink transition-colors hover:text-accent"
          >
            Sean Murray
          </a>

          <div className="hidden items-center gap-x-7 sm:flex">
            {headerItems.map((item) => {
              const isActive = item.link === `#${activeId}`;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-muted transition-colors hover:text-accent sm:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="flex flex-col gap-y-1 border-t border-rule py-3 sm:hidden">
            {headerItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className={`py-1.5 text-sm transition-colors hover:text-accent ${
                  item.link === `#${activeId}` ? "text-accent" : "text-muted"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
