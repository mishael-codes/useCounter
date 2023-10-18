import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-[100px]">
        <ul className="nav h-full text-xs md:text-4xl flex items-end justify-around">
          <NavLink to="/">Counter</NavLink>
          <NavLink to="./pagenotfound">404</NavLink>
          <NavLink to="./error">Error</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
