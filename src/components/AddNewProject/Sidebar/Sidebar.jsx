import React from "react";
import SidebarStep from "../SidebarStep/SidebarStep";

const Sidebar = () => {
	return (
		<div className="flex gap-2 p-4 h-40 justify-center items-start bg-logo bg-cover">
			<SidebarStep count={1} name="Name your project" />
			<SidebarStep count={2} name="Set settings" />
			<SidebarStep count={3} name="Add available positions" />
			<SidebarStep count={4} name="Set private options" />
		</div>
	);
};

export default Sidebar;
