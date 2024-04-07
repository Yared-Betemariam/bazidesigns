"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import MobNav from "./MobNav";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Works",
      path: "/works",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <header className="border-b border-gray-900/20 h-22 bg-background">
      <section className="h-full wrapper flex items-center justify-between">
        <Logo w />
        <nav className="hidden md:flex ml-auto">
          <ul className="flex items-center space-x-6 text-base font-semibold">
            {navLinks.map((item, i) => [
              <li key={i}>
                <Link
                  href={item.path}
                  className={`${
                    pathname == item.path ? "text-primary" : "opacity-85"
                  }`}
                >
                  {item.name}
                </Link>
              </li>,
            ])}
          </ul>
        </nav>
        <MobNav />
        <Link href={"/contact"}>
          <Button className="bg-primary text-gray-50 rounded-full ml-6 font-bold sm:px-6 sm:py-4">
            Contact Us
          </Button>
        </Link>
      </section>
    </header>
  );
};
export default Header;
