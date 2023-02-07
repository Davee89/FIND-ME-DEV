import { dataBase } from "../../../assets/data";
import ProjectCard from "../ProjectCard/ProjectCard";

type Props = {};

const ProjectsList = (props: Props) => {
	return (
		<div className="col-[2/5] row-[2/7] py-4 flex flex-wrap gap-10 justify-between">
			{dataBase.map(project => (
				<ProjectCard key={project.id} {...project} />
			))}
		</div>
	);
};

export default ProjectsList;
