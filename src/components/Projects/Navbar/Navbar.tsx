import { useState } from "react";
import NavBarLink from "../../NavBarLink/NavBarLink";

type Props = {};

const Navbar = (props: Props) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	const hideSideBar = () => setIsSideBarOpen(!isSideBarOpen);

	return (
		<>
			<div
				className="w-20 z-20 h-10 rounded-full border text-right bg-right bg-no-repeat bg-contain fixed left-[-45px] hover:animate-vibrate lg:hidden"
				onClick={() => setIsSideBarOpen(!isSideBarOpen)}
			/>
			<div
				className={`font-manrope lg:col-span-1 lg:row-span-6 lg:h-[100%] lg:flex lg:flex-col lg:p-6 lg:items-center lg:gap-6 lg:rounded-3xl ${
					isSideBarOpen
						? "transition-all fixed left-0 top-0 flex flex-col justify-center gap-5 h-screen z-10 w-screen bg-black bg-opacity-50 backdrop-blur-md lg:static lg:bg-transparent lg:w-[100%] lg:justify-start lg:backdrop-blur-0"
						: "absolute translate-x-[-200%] transition-all lg:static lg:translate-x-0"
				}`}>
				<NavBarLink hideSideBar={hideSideBar} src="" name="My Profile" to="my-profile" />
				<NavBarLink hideSideBar={hideSideBar} src="" name="My Projects" to="my-projects" amount={2} />
				<NavBarLink hideSideBar={hideSideBar} src="" name="All Projects" to="all-projects" amount={5} />
				{/* <NavBarLink hideSideBar={hideSideBar} src="" name="Messages" to="/" amount={10} /> */}
			</div>
		</>
	);
};

export default Navbar;
