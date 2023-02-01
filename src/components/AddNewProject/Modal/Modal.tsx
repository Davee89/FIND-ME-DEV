import Overlay from "../Overlay/Overlay";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Sidebar from "../Sidebar/Sidebar";
import InputArea from "../InputArea/InputArea";
import Nav from "../Nav/Nav";
import { useState } from "react";

const Modal = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);

	return (
		<div>
			<Overlay />
			<ProjectContainer>
				<Sidebar page={pageNumber} />
				<div>
					<InputArea page={pageNumber} />
					<Nav page={pageNumber} setPage={setPageNumber} />
				</div>
			</ProjectContainer>
		</div>
	);
};

export default Modal;
