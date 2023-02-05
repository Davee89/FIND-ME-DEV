import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="p-4">
			<ul className="flex justify-between items-center">
				<li className="p-2 uppercase list-none">About us</li>
				<li className="p-2 uppercase list-none">Projects</li>
				<li className="p-2 uppercase list-none">Login/Sign Up</li>
				<Link to="/add-new-project">
					<button>Add new Project</button>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
