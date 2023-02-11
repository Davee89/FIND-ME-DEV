import { Outlet } from "react-router-dom";
import Navbar from "../../components/Projects/Navbar/Navbar";

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className="max-w-[1400px] mx-auto h-[80vh] md:grid md:grid-cols-4 md:grid-rows-6 md:h-[80%] md:gap-5 md:mt-10 ">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Projects;
