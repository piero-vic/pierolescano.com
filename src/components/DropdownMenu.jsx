import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const useToggleMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) setDisplayMenu(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return [displayMenu, menuRef, toggleMenu];
};

const DropdownMenu = () => {
  const [displayMenu, menuRef, toggleMenu] = useToggleMenu();

  return (
    <div className="text-4xl sm:hidden">
      <button onClick={toggleMenu} className="w-fit h-fit">
        <FiMenu />
      </button>
      {displayMenu && (
        <div className="fixed bottom-0 left-0 z-10 w-full min-h-screen p-6 font-bold backdrop-filter backdrop-blur-xl">
          <div ref={menuRef} className="flex flex-col gap-8">
            <button onClick={toggleMenu} className="self-end w-fit h-fit mt-2">
              <FiX />
            </button>
            <a href="/projects" className="w-fit">
              Projects
            </a>
            <a href="https://medium.com/@piero-vic" class="w-fit">
              Blog
            </a>
            <a href="/contact" className="w-fit">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
