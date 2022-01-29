import React, { useState } from "react";

const PhCubeFill = (props) => {
  return (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        d="M229.9 70.8a.1.1 0 0 1-.1-.1a16.2 16.2 0 0 0-6-5.9l-88-49.5a16 16 0 0 0-15.6 0l-88 49.5a16.2 16.2 0 0 0-6 5.9a.1.1 0 0 1-.1.1v.2a15 15 0 0 0-2.1 7.7v98.6a16.1 16.1 0 0 0 8.2 14l88 49.5a16.5 16.5 0 0 0 7.2 2h1.4a16.1 16.1 0 0 0 7-2l88-49.5a16.1 16.1 0 0 0 8.2-14V78.7a15.6 15.6 0 0 0-2.1-7.9zm-101 48L48.4 74L128 29.2L207.7 74zm87.1 58.5l-79.9 45l.8-89.6l79.1-45z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const IconoirMenu = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g strokeWidth="1.5" fill="none">
        <path
          d="M3 5h18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 19h18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

const MdiClose = (props) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative items-center justify-between sm:flex text-blue">
      <a href="/" className="block w-16 h-16 transition hover:scale-110">
        <PhCubeFill />
      </a>

      <button
        onClick={() => setOpen(!open)}
        className="absolute top-0 right-0 w-8 h-8 my-4 sm:hidden"
      >
        {open ? <MdiClose /> : <IconoirMenu />}
      </button>

      <nav
        className={`mt-4 text-lg font-bold sm:mt-0 sm:block ${
          open ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <ul className="flex flex-col sm:flex-row gap-4">
          <li>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="https://medium.com/@piero-vic" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
