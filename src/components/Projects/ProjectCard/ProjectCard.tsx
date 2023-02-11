import { Member } from "../../AddNewProject/Modal/Modal";

type Props = {
	name: string;
	date: Date | null;
	description: string;
	framework: string;
	team: Member[];
	level: string;
};

function ProjectCard({ name, date, description, framework, team, level }: Props) {
	const levelSign = level.replace(level, level[0].toUpperCase());

	return (
		<div className="flex flex-col w-[275px] h-[250px]  items-center p-4 shadow-lg hover:bg-rose-300 hover:text-white text-rose-400 rounded-2xl gap-2 bg-white bg-cover cursor-pointer">
			<div className="flex items-center w-[100%] h-[25%]">
				<img
					src={`/${framework}.png`}
					alt={framework}
					title={framework.replace(framework[0], framework[0].toUpperCase())}
					className="w-[48px] h-[48px]"
				/>
				<h2 className="uppercase text-xl ml-4 tracking-widest">{name}</h2>
			</div>
			<div className="flex gap-10 opacity-50 justify-between w-[100%] h-[15%]">
				<p>{date && date.toUTCString().slice(0, -12)}</p>
				<p>Author</p>
			</div>
			<p className="overflow-hidden h-[40%] ">
				{description.slice(0, 84).concat("... ")}{" "}
				<span className="text-red-700 hover:font-bold ">{description.length > 97 && "Show More"}</span>
			</p>

			<div className="flex justify-between items-center w-[100%] h-[20%]">
				<div
					className={`py-[2px] w-[30px] h-[30px] text-center bg-${
						levelSign === "J" ? "green" : levelSign === "M" ? "orange" : "red"
					}-500 font-extrabold rounded-[15px]`}>
					{levelSign}
				</div>
				<div className="flex w-[100%] justify-end overflow-hidden">
					{team.map((member, i) => (
						<img key={i} className="w-[32px] h-[32px] mr-[-5px]" src={`/${member.name.toLowerCase()}.png`} />
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
