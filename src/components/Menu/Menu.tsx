import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../UI/Hamburger/Hamburger';
import { useState } from 'react';
import Toggle from '../UI/Toggle/Toggle';

type Props = {};

const Menu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const activeClassName = { textDecoration: 'underline' };

  return (
    <div className="p-4 flex items-center gap-10 dark:bg-black">
      <Hamburger isOpen={isOpen} onClick={setIsOpen} />
      <div
        className={`md:justify-between items-center md:gap-10 text-white font-semibold flex ${
          isOpen
            ? 'fixed flex-col top-0 left-0 items-center w-screen bg-black bg-opacity-60 h-[100%] justify-center gap-10 z-30 backdrop-blur-md text-red-400 transition-all'
            : 'fixed flex-col w-screen top-0 left-0 translate-x-[-200%] md:flex md:static md:translate-x-0 md:flex-row md:w-auto'
        }`}
      >
        <NavLink
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/projects"
          className="p-2 uppercase list-none hover:animate-vibrate"
          onClick={closeMenu}
        >
          Projects
        </NavLink>
        {/* <NavLink to="/" className="p-2 uppercase list-none hover:animate-vibrate" onClick={closeMenu}>
          Login/Sign Up
        </NavLink> */}
        <Link to="/add-new-project" onClick={closeMenu}>
          <button className="uppercase animate-pulse-slow">Add new Project</button>
        </Link>
        {/* <Toggle /> */}
      </div>
    </div>
  );
};

export default Menu;
