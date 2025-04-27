import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/docs/home" },
  {
    name: "GitHub",
    href: "https://github.com/Kshitijknk07/Div-ine-UI",
    external: true,
  },
];

export function NavbarSection() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-30 transition-all duration-300",
        scrolled
          ? "bg-[#222831]/95 backdrop-blur-lg border-b border-[#00ADB5]/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <div className="flex items-center">
            <span className="text-[#00ADB5] mr-1 text-2xl font-bold tracking-tighter">
              Div
            </span>
            <span className="text-[#00ADB5] text-2xl font-extrabold tracking-tighter">
              -ine UI
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105",
                      activeLink === link.href
                        ? "bg-[#00ADB5]/10 text-[#00ADB5]"
                        : "text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5]"
                    )}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="block">
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            size="sm"
            className="rounded-full gap-2 bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium hover:scale-105 transition-transform"
          >
            <Link to="/docs/home" className="flex items-center">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#00ADB5] hover:bg-[#00ADB5]/10 hover:scale-110 transition-transform"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#222831] border-none shadow-none"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-[#EEEEEE]">
                <div className="flex items-center">
                  <span className="text-[#00ADB5] mr-1 text-2xl">Div</span>
                  <span className="text-[#00ADB5] text-2xl font-extrabold">
                    -ine UI
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-md text-sm font-medium text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5] transition-colors block hover:translate-x-1"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="px-4 py-2 rounded-md text-sm font-medium text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5] transition-colors block hover:translate-x-1"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4">
                  <Button
                    asChild
                    size="sm"
                    className="w-full rounded-full gap-2 bg-[#00ADB5] hover:bg-[#00ADB5]/90 text-[#222831] font-medium hover:scale-105 transition-transform"
                  >
                    <Link
                      to="/docs/home"
                      className="flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavbarSection;
