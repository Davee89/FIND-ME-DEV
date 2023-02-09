import { Link, NavLink } from "react-router-dom";
import Hamburger from "../UI/Hamburger/Hamburger";
import { useState } from "react";

type Props = {};

const Menu = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);
	const activeClassName = { textDecoration: "underline" };

	return (
		<div className="p-4 flex items-center gap-10">
			<Hamburger isOpen={isOpen} onClick={setIsOpen} />
			<div
				className={`md:justify-between items-center md:gap-10 text-white font-semibold flex ${
					isOpen
						? "fixed flex-col top-28 left-0 items-center w-screen bg-white bg-opacity-50 h-[60%] justify-center gap-10 z-30 backdrop-blur-md text-red-400"
						: "hidden md:flex"
				}`}>
				<NavLink
					style={({ isActive }) => (isActive ? activeClassName : undefined)}
					to="/projects"
					className="p-2 uppercase list-none hover:animate-vibrate"
					onClick={closeMenu}>
					Projects
				</NavLink>
				<NavLink to="/" className="p-2 uppercase list-none hover:animate-vibrate" onClick={closeMenu}>
					Login/Sign Up
				</NavLink>
				<Link to="/add-new-project" onClick={closeMenu}>
					<button className="uppercase animate-pulse-slow">Add new Project</button>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
