const NavbarLink = props => {
  const { text, path } = props;

  return (
    <li>
      <a
        href={path}
        className="decoration-2 underline-offset-4 hover:underline"
      >
        {text}
      </a>
    </li>
  );
};

export default NavbarLink;
