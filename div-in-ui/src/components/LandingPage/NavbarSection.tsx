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
    <header className="fixed top-0 left-0 w-full z-30 border-b border-[#00ADB5] bg-[#222831] shadow-lg backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="flex items-center">
            <span className="text-[#00ADB5] mr-1 text-3xl">Div</span>
            <span className="text-[#00ADB5] text-3xl font-extrabold">
              -ine UI
            </span>
          </div>
        </a>

        <div className="hidden md:flex flex-1 justify-center px-6 max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EEEEEE]" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="w-full pl-10 bg-[#393E46] border-[#00ADB5] focus:border-[#00ADB5] placeholder:text-[#7b7b7b] text-[#EEEEEE]"
            />
          </div>
        </div>

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
                      "px-4 py-2 rounded-full text-[#EEEEEE] hover:bg-[#00ADB5]/20 hover:text-[#7b7b7b] transition-colors",
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

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#00ADB5] hover:bg-[#00ADB5]/20"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-b from-[#222831] to-[#393E46] border-l-[#00ADB5] text-[#EEEEEE]"
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
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EEEEEE]" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-10 bg-[#393E46] border-[#00ADB5] focus:border-[#00ADB5] placeholder:text-[#7b7b7b] text-[#EEEEEE]"
                />
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 rounded-full text-[#EEEEEE] hover:bg-[#00ADB5]/20 hover:text-[#7b7b7b] transition-colors"
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
