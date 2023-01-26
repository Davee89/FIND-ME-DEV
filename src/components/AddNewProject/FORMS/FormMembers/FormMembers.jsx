import React from "react";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import InputImage from "../../../UI/InputImage/InputImage";
import Member from "../../../UI/Member/Member";
import SelectedInputAdd from "../../../UI/SelectedInput/SelectedInputAdd/SelectedInputAdd";
import NewMember from "../../../NewMember/NewMember";

const FormMembers = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-10 md:mb-16">
				Here will be adding new members area!{" "}
			</h2>
			<div>
				<SelectedInputAdd
					label="Add new role"
					option={{ one: "-----", two: "Frontend Dev", three: "Backend Dev", four: "UI Designer" }}
				/>
			</div>
			<div>
				<h3>Your team:</h3>
				<div className="p-4 border flex gap-4 flex-col shadow-inner bg-green-50 max-h-[235px]">
					<NewMember />
				</div>
			</div>
		</form>
	);
};

export default FormMembers;
