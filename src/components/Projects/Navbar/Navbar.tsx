import { useState } from "react";
import NavBarLink from "../../NavBarLink/NavBarLink";

type Props = {};

const Navbar = (props: Props) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const hideSideBar = () => setIsSideBarOpen(!isSideBarOpen);

	return (
		<>
			<div
				className="w-20 z-20 h-10 rounded-full border text-right bg-right bg-no-repeat bg-contain fixed left-[-45px] hover:animate-vibrate md:hidden"
				onClick={() => setIsSideBarOpen(!isSideBarOpen)}
			/>
			<div
				className={`md:col-span-1 md:row-span-6 md: md:h-[100%] md:flex md:flex-col md:p-6 md:items-center md:gap-6 md:rounded-3xl ${
					isSideBarOpen
						? "transition-all fixed left-0 top-0 flex flex-col justify-center gap-5 h-screen z-10 w-screen bg-blue-300 bg-opacity-50 backdrop-blur-md md:static md:bg-transparent md:w-[100%] md:justify-start md:backdrop-blur-0"
						: "absolute translate-x-[-200%] transition-all md:static md:translate-x-0"
				}`}>
				<NavBarLink hideSideBar={hideSideBar} src="" name="My Profile" to="my-profile" />
				<NavBarLink hideSideBar={hideSideBar} src="" name="My Projects" to="my-projects" amount={2} />
				<NavBarLink hideSideBar={hideSideBar} src="" name="All Projects" to="all-projects" amount={5} />
				<NavBarLink hideSideBar={hideSideBar} src="" name="Messages" to="" amount={10} />
			</div>
		</>
	);
};

export default Navbar;
