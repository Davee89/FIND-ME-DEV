import Overlay from "../Overlay/Overlay";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import Sidebar from "../Sidebar/Sidebar";
import InputArea from "../InputArea/InputArea";
import Nav from "../Nav/Nav";

const Modal = () => {
	return (
		<div>
			<Overlay />
			<ProjectContainer>
				<Sidebar />
				<div>
					<InputArea />
					<Nav />
				</div>
			</ProjectContainer>
		</div>
	);
};

export default Modal;
