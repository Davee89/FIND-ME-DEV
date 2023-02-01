const SidebarStep = ({ count, name, active }: { count: number; name: string; active?: boolean }) => {
	return (
		<div className="flex gap-2 items-center justify-center pointer-events-none">
			<button
				className={`w-[35px] h-[35px] rounded-full  border-2 border-white text-center font-extrabold text-yellow-500 md:w-[50px] md:h-[50px] ${
					active ? "bg-white" : "bg-transparent"
				}`}>
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
