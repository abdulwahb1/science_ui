import { Button } from "@/components";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { NAVBAR_LINKS } from "@/constants";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position="static" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image
            src="/navlogo.png"
            width={316}
            height={37}
            alt="ScienceReach-Logo"
            className="w-30 sm:w-40"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-lg text-black font-normal" href="#">
            Our Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg text-black font-normal" href="#">
            Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg text-black font-normal" href="#">
            Explore
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button variant="btn_white_mobile ">
            {" "}
            <Link href="#" className="text-black">
              Login
            </Link>
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button variant="btn_purple_mobile">
            {" "}
            <Link href="#" className="text-white">
              Sign In
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {NAVBAR_LINKS.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-black" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent justify="end" className="flex sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
    </Navbar>
  );
}
