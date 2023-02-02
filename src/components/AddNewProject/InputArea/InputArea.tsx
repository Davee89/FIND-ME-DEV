import FormName from "../FORMS/FormName/FormName";
import FormSettings from "../FORMS/FormSettings/FormSettings";
import FormStack from "../FORMS/FormStack/FormStack";
import FormMembers from "../FORMS/FormMembers/FormMembers";
import { Project } from "../Modal/Modal";

type inputAreaProps = {
	page: number;
	project: Project;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
	setProjectData: React.Dispatch<React.SetStateAction<Project>>;
};

const InputArea = ({ page, project, onChange, setProjectData }: inputAreaProps) => {
	const displayPage = (page: number): JSX.Element => {
		switch (page) {
			case 1:
				return <FormName name={project.name} type={project.type} description={project.description} onChange={onChange} />;
				break;
			case 2:
				return (
					<FormStack
						language={project.language}
						framework={project.framewrok}
						version={project.version}
						onChange={onChange}
					/>
				);
				break;
			case 3:
				return (
					<FormSettings
						date={project.date}
						hours={project.hours}
						level={project.level}
						onChange={onChange}
						setProjectData={setProjectData}
					/>
				);
				break;
			case 4:
				return <FormMembers team={project.team} setProjectData={setProjectData} />;
				break;
			default:
				return <>Oops something went wrong with your request</>;
		}
	};

	return (
		<div className="w-[330px] h-[500px] p-10  bg-white relative mx-auto top-[-90px] rounded-xl md:top-0 md:rounded-none md:w-[490px]">
			{displayPage(page)}
		</div>
	);
};

export default InputArea;
