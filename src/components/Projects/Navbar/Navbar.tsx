import { NavLink } from "react-router-dom";
import NavBarLink from "../../NavBarLink/NavBarLink";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="md:col-span-1 md:row-span-6 md: md:h-[100%] md:flex md:flex-col md:p-6 md:items-center md:gap-6 md:rounded-3xl">
			<NavBarLink src="" name="My Profile" to="" />
			<NavBarLink src="" name="My Projects" to="" amount={2} />
			<NavBarLink src="" name="All Projects" to="" amount={5} />
			<NavBarLink src="" name="Messages" to="" amount={10} />
		</div>
	);
};

export default Navbar;
