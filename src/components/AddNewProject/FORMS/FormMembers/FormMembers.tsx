import SelectedInputAdd from "../../../UI/SelectedInput/SelectedInputAdd/SelectedInputAdd";
import NewMember from "../../../NewMember/NewMember";

const FormMembers = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Here will be adding new members! </h2>
			<div>
				<SelectedInputAdd label="Add new role" options={["-----", "Frontend Dev", "Backend Dev", "UI Designer"]} />
			</div>
			<div>
				<h3 className="text-gray-400 tracking-widest">Your team:</h3>
				<div className=" flex flex-col max-h-[235px]">
					<NewMember role="Frontend Developer" amount={3} />
					<NewMember role="Backend Developer" />
					<NewMember role="Frontend Developer" />
				</div>
			</div>
		</form>
	);
};

export default FormMembers;
