import { dataBase } from "../../../assets/data";
import ProjectCard from "../ProjectCard/ProjectCard";

type Props = {};

const ProjectsList = (props: Props) => {
	return (
		<div className="md:col-[2/5] md:row-[2/7] py-4 flex md:flex-wrap md:flex-row gap-10 md:justify-between flex-col items-center">
			{dataBase.map(project => (
				<ProjectCard key={project.id} {...project} />
			))}
		</div>
	);
};

export default ProjectsList;
