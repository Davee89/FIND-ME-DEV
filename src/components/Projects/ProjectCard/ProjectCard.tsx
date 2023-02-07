import { Member } from "../../AddNewProject/Modal/Modal";

type Props = {
	name: string;
	date: Date | null;
	description: string;
	framework: string;
	team: Member[];
};

function ProjectCard({ name, date, description, framework, team }: Props) {
	return (
		<div className="flex flex-col max-w-[300px] max-h-[500px] border items-center p-4 text-white rounded-2xl gap-4 bg-white bg-opacity-60">
			<h2>{name}</h2>
			<div className="flex gap-10 opacity-50 justify-center w-[100%]">
				<p>{date && date.toISOString()}</p>
				<p>autor</p>
			</div>
			<p>{description}</p>
			<img src="/public/background.webp" />

			<div className="flex justify-between w-[100%]">
				<p>{framework}</p>
				<p>{team.map(member => member.name)}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
