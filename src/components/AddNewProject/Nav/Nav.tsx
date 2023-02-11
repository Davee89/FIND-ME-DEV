import Button from "../../UI/Button/Button";
import { Project } from "../Modal/Modal";
import { dataBase } from "../../../assets/data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NavProps = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	projectData: Project;
};

const Nav = ({ page, setPage, projectData }: NavProps) => {
	const { date, description, framework, level, name, team } = projectData;

	const [isFullfilled, setIsFullfilled] = useState<string | boolean | Date | null>(true);
	const [isClicked, setIsClicked] = useState(false);
	const navigate = useNavigate();

	const goBackHandler = () => {
		page !== 1 ? setPage(p => p - 1) : setPage(page);
	};

	const checkIfFullfilled = () => {
		switch (page) {
			case 1:
				return name.trim() && description.trim();
			case 2:
				return date && framework.trim();

			case 3:
				return level.trim();
			case 4:
				return team.length !== 0;
			default:
				return false;
		}
	};

	useEffect(() => {
		setIsFullfilled(checkIfFullfilled());
	}, [page, projectData]);

	const nextStepHandler = () => {
		if (page !== 4) {
			if (checkIfFullfilled()) {
				setPage(p => p + 1);
				setIsClicked(false);
			} else {
				setIsFullfilled(false);
				setIsClicked(true);
			}
		} else {
			setPage(page);
		}
	};

	const addNewProject = () => {
		dataBase.push(projectData);
		navigate(-1);
	};

	return (
		<div className="w-[330px] h-[100px] mt-[-60px] bg-white mx-auto rounded-xl flex justify-between items-center p-4 md:p-10 md:mt-0 md:rounded-none md:w-[490px]">
			<Button disabled={page === 1} name="Go Back" onClick={goBackHandler} />
			{!isFullfilled && isClicked && (
				<h3 className="text-red-700 text-sm p-4 w-24 md:text-base w-32">Fill all the fields first!</h3>
			)}
			{page === 4 ? (
				<Button name={"Add project"} onClick={addNewProject} />
			) : (
				<Button name={"Next Step"} onClick={nextStepHandler} />
			)}
		</div>
	);
};

export default Nav;
