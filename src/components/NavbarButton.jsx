import React from "react";
import { IconoirMenu, MdiClose } from "./Icons.jsx";

const NavbarButton = props => {
  const { open, setOpen } = props;

  return (
    <button
      onClick={() => setOpen(!open)}
      className="absolute top-0 right-0 my-4 h-8 w-8 sm:hidden"
    >
      {open ? (
        <MdiClose aria-hidden="true" focusable="false" />
      ) : (
        <IconoirMenu aria-hidden="true" focusable="false" />
      )}
      <span className="sr-only">Navbar Button</span>
    </button>
  );
};

export default NavbarButton;
