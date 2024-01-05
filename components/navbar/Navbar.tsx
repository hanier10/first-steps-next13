import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "..";

const navItems = [
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
  { path: "/about", text: "About" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
