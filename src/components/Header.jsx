import { useState } from "react";
import { PhCubeFill } from "./Icons.jsx";
import NavbarButton from "./NavbarButton.jsx";
import NavbarLink from "./NavbarLink.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative mb-6 items-center justify-between text-blue sm:flex">
      <a href="/" className="block h-16 w-16 transition hover:scale-110">
        <PhCubeFill aria-hidden="true" focusable="false" />
        <span className="sr-only">Home</span>
      </a>

      <NavbarButton open={open} setOpen={setOpen} />

      <nav
        className={`mt-6 text-lg font-bold sm:mt-0 sm:block ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex justify-center gap-6 sm:flex-row">
          <NavbarLink text="Projects" path="/projects" />
          <NavbarLink text="Blog" path="/blog" />
          <NavbarLink text="Contact" path="/contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
