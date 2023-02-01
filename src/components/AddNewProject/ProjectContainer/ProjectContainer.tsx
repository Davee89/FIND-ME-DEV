import { ReactNode } from "react";

const ProjectContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative z-20 md:flex md:bg-gray-100 md:w-[800px] md:h-[600px] md:mx-auto md:my-auto md:rounded-2xl md:top-[15vh]">
			{children}
		</div>
	);
};

export default ProjectContainer;
