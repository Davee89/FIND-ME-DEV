import Button from "../../UI/Button/Button";
import { Project } from "../Modal/Modal";
import { dataBase } from "../../../assets/data";

type NavProps = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	projectData: Project;
};

const Nav = ({ page, setPage, projectData }: NavProps) => {
	const goBackHandler = () => {
		page !== 1 ? setPage(p => p - 1) : setPage(page);
	};

	const nextStepHandler = () => {
		page !== 4 ? setPage(p => p + 1) : setPage(page);
	};

	const addNewProject = () => {
		dataBase.push(projectData);
		console.log(dataBase);
	};

	return (
		<div className="w-[330px] h-[100px] mt-[-60px] bg-white mx-auto rounded-xl flex justify-between items-center p-10 md:mt-0 md:rounded-none md:w-[490px]">
			<Button disabled={page === 1} name="Go Back" onClick={goBackHandler} />
			{page === 4 ? (
				<Button name={"Add project"} onClick={addNewProject} />
			) : (
				<Button name={"Next Step"} onClick={nextStepHandler} />
			)}
		</div>
	);
};

export default Nav;
