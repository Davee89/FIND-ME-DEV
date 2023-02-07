import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="md:col-span-1 md:row-span-6 md: md:h-[100%] md:flex md:flex-col md:p-6 md:items-center md:gap-6 md:rounded-3xl">
			<NavLink to="" className="border p-1 w-[100%] rounded-full uppercase text-white flex justify-between px-6">
				<div>
					<img src="" />
					<p className="p-2">My Profile</p>
				</div>
				<span className="px-4 py-2 bg-white bg-opacity-30 rounded-full">10</span>
			</NavLink>
			<NavLink to="">My projects</NavLink>
			<NavLink to="">All projects</NavLink>
		</div>
	);
};

export default Navbar;
