import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  return (
    <header className="fixed top-0 left-0 w-full z-30 border-b border-[#faff00]/20 bg-[#000300] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="flex items-center">
            <span className="text-[#faff00] mr-1 text-3xl">Div</span>
            <span className="text-white text-3xl font-extrabold">-ine UI</span>
          </div>
        </a>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-6 max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#faff00]/70" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="w-full pl-10 bg-[#000300] border-[#faff00]/20 focus:border-[#faff00]/50 placeholder:text-white/50 text-white"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "px-4 py-2 rounded-full text-white hover:bg-[#faff00]/10 hover:text-[#faff00] transition-colors",
                      "font-medium"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#faff00] hover:bg-[#faff00]/10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#000300] border-l-[#faff00]/20 text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                <div className="flex items-center">
                  <span className="text-[#faff00] mr-1 text-2xl">Div</span>
                  <span className="text-white text-2xl font-extrabold">
                    -ine UI
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#faff00]/70" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-10 bg-[#000300] border-[#faff00]/20 placeholder:text-white/50 text-white"
                />
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "block px-4 py-3 rounded-md hover:bg-[#faff00]/10 hover:text-[#faff00] transition-colors",
                      "font-medium"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavbarSection;
