import SelectedInputAdd from "../../../UI/SelectedInput/SelectedInputAdd/SelectedInputAdd";
import NewMember from "../../../NewMember/NewMember";
import { Member, Project } from "../../Modal/Modal";
import { useState } from "react";

type MembersProps = {
	team: Member[];
	setProjectData: React.Dispatch<React.SetStateAction<Project>>;
};

const FormMembers = ({ team, setProjectData }: MembersProps) => {
	const [newMember, setNewMember] = useState<Member>({
		name: "Frontend Dev",
		amount: 1,
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
					amount: alreadyPickedMember.amount ? alreadyPickedMember.amount + 1 : alreadyPickedMember.amount,
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

	const removeMember = (role: string | null) => {
		setProjectData(prevData => {
			const selectedMember = prevData.team.find(member => member.name === role);
			if (selectedMember) {
				if (selectedMember.amount && selectedMember.amount !== 1) {
					const updatedTeam = prevData.team.map(member => {
						if (member.name === role) {
							return {
								...member,
								amount: member.amount ? member.amount - 1 : (member.amount = 0),
							};
						}
						return member;
					});
					return { ...prevData, team: updatedTeam };
				} else {
					const updatedTeam = prevData.team.filter(member => member.name !== role);
					return { ...prevData, team: updatedTeam };
				}
			} else return { ...prevData };
		});
	};

	const setMemberToAdd = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setNewMember({ ...newMember, name: e.target.value });
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
						<NewMember
							key={i}
							role={role.name}
							amount={role.amount}
							onClick={(e: React.MouseEvent<HTMLElement>) => {
								e.preventDefault();
								removeMember(role.name);
							}}
						/>
					))}
				</div>
			</div>
		</form>
	);
};

export default FormMembers;
