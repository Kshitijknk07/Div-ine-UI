import { Menu } from "lucide-react";
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
    <header className="fixed top-0 left-0 w-full z-30 border-b border-[#00ADB5] bg-[#222831]/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
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
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5] transition-colors",
                      "data-[active]:bg-[#00ADB5]/10 data-[active]:text-[#00ADB5]"
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
              className="md:hidden text-[#00ADB5] hover:bg-[#00ADB5]/10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#222831] border-l-[#00ADB5]/20"
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
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 rounded-md text-sm font-medium text-[#EEEEEE] hover:bg-[#00ADB5]/10 hover:text-[#00ADB5] transition-colors"
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
