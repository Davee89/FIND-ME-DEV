import { useContext } from "react";
import FilterBar from "../../components/Projects/FilterBar/FilterBar";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList";
import { LoggedContext } from "../../context/LoggedContext";
import NotLogged from "./NotLogged";

type Props = {};

const MyProjects = (props: Props) => {
	const { isLogged } = useContext(LoggedContext);
	return (
		<>
			<FilterBar />
			{isLogged ? <ProjectsList /> : <NotLogged />}
		</>
	);
};

export default MyProjects;
