import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { IoLogoVercel } from "react-icons/io5";

export default function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll> 
      <NavbarBrand>
        <IoLogoVercel size='24' className='text-wh'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre mim
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}