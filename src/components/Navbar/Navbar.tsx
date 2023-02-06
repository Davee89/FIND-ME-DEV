import { Link, NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="p-4 ">
			<ul className="justify-between items-center md:gap-10 text-white font-semibold hidden md:flex">
				<NavLink to="/about-us" className="p-2 uppercase list-none">
					About us
				</NavLink>
				<NavLink to="/projects" className="p-2 uppercase list-none">
					Projects
				</NavLink>
				<NavLink to="/" className="p-2 uppercase list-none">
					Login/Sign Up
				</NavLink>
				<Link to="/add-new-project">
					<button className="uppercase">Add new Project</button>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
