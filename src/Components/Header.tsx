import React, { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import headerItems from "../config/HeaderConfig";

const Header: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Highlight the section the reader is currently in.
  //
  // This is deliberately scroll math rather than an IntersectionObserver
  // band. The last section can never reach a band anchored near the top of
  // the viewport -- there is no content below it to scroll it up there -- so
  // an observer leaves it permanently unhighlighted. Reaching the bottom of
  // the page is therefore special-cased.
  useEffect(() => {
    const ids = headerItems.map((item) => item.link.replace("#", ""));
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      // Within a quarter viewport of the end counts as being in the final
      // section: by then it fills most of the screen, and an exact-bottom
      // test would only highlight it in the last handful of pixels.
      const nearBottom =
        window.scrollY + window.innerHeight >=
        doc.scrollHeight - window.innerHeight * 0.25;

      if (nearBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      const line = window.scrollY + window.innerHeight * 0.3;
      let current = "";
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= line) current = id;
      });
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    const onClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-ground/90 backdrop-blur">
      <nav className="mx-auto w-full max-w-6xl px-5">
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
            ref={buttonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-accent sm:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen ? (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="flex flex-col gap-y-1 border-t border-rule py-3 sm:hidden"
          >
            {headerItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMenu}
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
