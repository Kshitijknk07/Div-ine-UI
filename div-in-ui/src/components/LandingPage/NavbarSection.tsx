import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

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
        background: "var(--background, #fbfbfe)",
        color: "var(--text, #040316)",
      }}
      className="fixed top-0 left-0 w-full z-30 border-b border-transparent shadow-lg rounded-b-xl transition-colors"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span
            style={{
              color: "#000000",
            }}
            className="drop-shadow"
          >
            div-ine-ui
          </span>
        </a>
        {/* Search (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <Input
            type="search"
            placeholder="Search documentation..."
            className="max-w-xs"
            aria-label="Search"
          />
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-medium transition-colors px-3 py-1 rounded-lg hover:bg-black/5"
                style={{
                  color: "var(--text, #040316)",
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6" style={{ color: "var(--text, #040316)" }} />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ color: "var(--text, #040316)" }}
            />
          )}
        </button>
      </nav>
      {/* Mobile Nav */}
      {open && (
        <div
          style={{
            background: "var(--background, #fbfbfe)",
            color: "var(--text, #040316)",
          }}
          className="md:hidden border-t border-transparent px-6 py-4 animate-fade-in-down"
        >
          {/* Search (Mobile) */}
          <div className="mb-4">
            <Input
              type="search"
              placeholder="Search documentation..."
              className="w-full"
              aria-label="Search"
            />
          </div>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block font-medium transition-colors px-3 py-2 rounded-lg hover:bg-black/5"
                  style={{
                    color: "var(--text, #040316)",
                  }}
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
