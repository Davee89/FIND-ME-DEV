import SelectedInputAdd from "../../../UI/SelectedInput/SelectedInputAdd/SelectedInputAdd";
import NewMember from "../../../NewMember/NewMember";
import { Member, Project } from "../../Modal/Modal";
import { useState } from "react";

const FormMembers = ({
	team,
	setProjectData,
}: {
	team: Member[];
	setProjectData: React.Dispatch<React.SetStateAction<Project>>;
}) => {
	const [newMember, setNewMember] = useState<Member>({
		name: "",
		amount: null,
	});

	const addMember = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setProjectData(prevData => {
			const alreadyPickedMember = team.find(member => member.name === newMember.name);
			if (!alreadyPickedMember)
				return {
					...prevData,
					team: [...team, newMember],
				};
			else {
				const updatedMember = {
					...alreadyPickedMember,
					amount: alreadyPickedMember.amount ? alreadyPickedMember.amount + 1 : (alreadyPickedMember.amount = 1),
				};
				const updatedTeam = team.map(member => {
					if (member.name === newMember.name) return updatedMember;
					return member;
				});
				return {
					...prevData,
					team: updatedTeam,
				};
			}
		});
	};

	const setMemberToAdd = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setNewMember({ name: e.target.value });
	};

	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Here will be adding new members! </h2>
			<div>
				<SelectedInputAdd
					onClick={addMember}
					onChange={setMemberToAdd}
					value=""
					name="team"
					label="Add new role"
					options={["Frontend Dev", "Backend Dev", "UI Designer"]}
				/>
			</div>
			<div>
				<h3 className="text-gray-400 tracking-widest">Your team:</h3>
				<div className=" flex flex-col max-h-[235px]">
					{team.map((role, i) => (
						<NewMember key={i} role={role.name} amount={role.amount} />
					))}
				</div>
			</div>
		</form>
	);
};

export default FormMembers;
