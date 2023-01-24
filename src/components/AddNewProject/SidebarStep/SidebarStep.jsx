import React from "react";

const SidebarStep = ({ count, name }) => {
	return (
		<div className="flex gap-2 items-center justify-center ">
			<button className="w-[35px] h-[35px] rounded-full bg-transparent border-2 border-white text-center font-extrabold text-yellow-500 md:w-[50px] md:h-[50px]">
				{count}
			</button>
			<div>
				<span className="hidden text-sm text-gray-400 md:block ">STEP {count}</span>
				<h3 className=" hidden font-bold text-white md:block ">{name}</h3>
			</div>
		</div>
	);
};

export default SidebarStep;
