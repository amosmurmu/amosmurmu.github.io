import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/content";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line  bg-paper">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[820px] items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          aria-label="home"
          className="font-semibold  tracking-tight text-ink"
        >
          <span className="text-lg sm:hidden">あ</span>
          <span className="hidden sm:inline text-lg"> Amos Murmu </span>
        </a>

        <ul className="hidden items-center gap-4 text-md sm:flex sm:gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-md p-2 text-ink transition-colors hover:bg-sand sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FiX aria-hidden="true" className="size-5" />
          ) : (
            <FiMenu aria-hidden="true" className="size-5" />
          )}
        </button>

        {/* Mobile navigation dropdown */}
        {menuOpen && (
          <ul
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-line bg-paper px-5 py-3 shadow-sm sm:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-sand hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
