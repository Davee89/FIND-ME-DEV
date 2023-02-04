import Overlay from "../Overlay/Overlay";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Sidebar from "../Sidebar/Sidebar";
import InputArea from "../InputArea/InputArea";
import Nav from "../Nav/Nav";
import { useState } from "react";

export interface Member {
	name: string;
	amount?: number | null;
}
export interface Project {
	id: number;
	name: string;
	type: string;
	description: string;
	language: string;
	framework: string;
	version: string;
	date: Date | null;
	hours: number;
	level: string;
	team: Member[];
}

const Modal = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [projectData, setProjectData] = useState<Project>({
		id: 0,
		name: "",
		type: "",
		description: "",
		language: "",
		framework: "",
		version: "",
		date: new Date(),
		hours: 0,
		level: "",
		team: [],
	});

	const projectFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProjectData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};
	console.log("tutaj sprawdzamy czy sie zmienia data", projectData);
	return (
		<div>
			<Overlay />
			<ProjectContainer>
				<Sidebar page={pageNumber} />
				<div>
					<InputArea page={pageNumber} project={projectData} onChange={projectFormHandler} setProjectData={setProjectData} />
					<Nav page={pageNumber} setPage={setPageNumber} projectData={projectData} />
				</div>
			</ProjectContainer>
		</div>
	);
};

export default Modal;
