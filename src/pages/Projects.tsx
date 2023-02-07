import FilterBar from "../components/Projects/FilterBar/FilterBar";
import Navbar from "../components/Projects/Navbar/Navbar";
import ProjectsList from "../components/Projects/ProjectsList/ProjectsList";

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className="max-w-[1400px] mx-auto grid grid-cols-4 grid-rows-6 h-[80%] md:gap-5 mt-10 ">
			<Navbar></Navbar>
			<FilterBar></FilterBar>
			<ProjectsList></ProjectsList>
		</div>
	);
};

export default Projects;
