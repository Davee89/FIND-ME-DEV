import { Link, NavLink } from "react-router-dom";
import Hamburger from "../UI/Hamburger/Hamburger";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);
	return (
		<div className="p-4 flex items-center gap-10">
			<Hamburger isOpen={isOpen} onClick={setIsOpen} />
			<div
				className={`md:justify-between items-center md:gap-10 text-white font-semibold flex ${
					isOpen
						? "absolute flex-col top-28 left-0 items-center w-screen bg-white bg-opacity-50 h-[60%] justify-center gap-10 z-20   "
						: "hidden md:flex"
				}`}>
				<NavLink to="/about-us" className="p-2 uppercase list-none" onClick={closeMenu}>
					About us
				</NavLink>
				<NavLink to="/projects" className="p-2 uppercase list-none" onClick={closeMenu}>
					Projects
				</NavLink>
				<NavLink to="/" className="p-2 uppercase list-none" onClick={closeMenu}>
					Login/Sign Up
				</NavLink>
				<Link to="/add-new-project" onClick={closeMenu}>
					<button className="uppercase">Add new Project</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
