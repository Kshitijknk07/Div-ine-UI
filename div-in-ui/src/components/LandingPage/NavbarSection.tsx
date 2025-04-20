import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "GitHub", href: "https://github.com/your-repo", external: true },
];

export function NavbarSection() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-fuchsia-500/80 via-cyan-500/80 to-emerald-400/80 backdrop-blur-lg border-b border-transparent shadow-lg rounded-b-xl transition-colors">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow">
            div-ine-ui
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/90 hover:text-fuchsia-200 font-medium transition-colors px-3 py-1 rounded-lg hover:bg-white/10"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-gradient-to-br from-fuchsia-600 via-cyan-600 to-emerald-500 border-t border-transparent px-6 py-4 animate-fade-in-down">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-white/90 hover:text-fuchsia-200 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
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
