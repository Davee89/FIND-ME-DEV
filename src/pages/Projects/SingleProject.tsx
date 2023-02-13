import { useParams } from "react-router-dom";

type Props = {};

const SingleProject = (props: Props) => {
	const { projectId } = useParams();
	return <div>SingleProject {projectId}</div>;
};

export default SingleProject;
