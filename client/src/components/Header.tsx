import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components";

const NAVIGATION_LINKS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/projects",
    label: "Projects",
  },
  {
    path: "/about",
    label: "About",
  },
];

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Navbar className="border-b-2">
      <Logo className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white hidden sm:block" />
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden sm:block"
        />
      </form>
      <Button
        className="w-12 h-10 sm:hidden mr-auto sm:mx-auto "
        color="gray"
        pill
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex items-center gap-2 md:order-last">
        <Button className="w-12 h-10 hidden sm:block" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign in
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NAVIGATION_LINKS.map(({ label, path }) => (
          <Navbar.Link key={label} active={path === pathname} as="div">
            <Link to={path}>{label}</Link>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
