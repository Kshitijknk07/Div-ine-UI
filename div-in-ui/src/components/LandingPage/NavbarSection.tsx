import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  {
    name: "GitHub",
    href: "https://github.com/Kshitijknk07/Div-ine-UI",
    external: true,
  },
];

export function NavbarSection() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        background: "#eae0d5",
        color: "#250902",
      }}
      className="fixed top-0 left-0 w-full z-30 border-b border-transparent shadow-lg rounded-b-xl transition-colors"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span
            style={{
              color: "#250902",
            }}
            className="drop-shadow bg-gradient-to-r from-[#250902] to-[#250902] bg-clip-text text-transparent"
          >
            div-ine-ui
          </span>
        </a>

        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#250902] bg-[#eae0d5] focus:border-[#250902] focus:ring-1 focus:ring-[#250902]/30 transition-all outline-none text-[#250902]"
              aria-label="Search"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#250902]/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-medium transition-colors px-3 py-2 rounded-lg hover:bg-[#250902]/20 text-[#250902]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#250902]/20 transition text-[#250902]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "#eae0d5",
            color: "#250902",
          }}
          className="md:hidden border-t border-[#250902] px-6 py-4 animate-fade-in-down"
        >
          <div className="mb-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#250902] bg-[#eae0d5] focus:border-[#250902] focus:ring-1 focus:ring-[#250902]/30 transition-all outline-none text-[#250902]"
                aria-label="Search"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#250902]/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block font-medium transition-colors px-3 py-2 rounded-lg hover:bg-[#250902]/20 text-[#250902]"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavbarSection;
