import React from "react";

const NewMember = ({ role, amount }) => {
	return (
		<div className="flex justify-between items-center py-2">
			<p className="w-[70%] border p-2 font-semibold rounded-xl shadow-md bg-white ">{role}Frontend Dev</p>
			<span className="rounded-full border p-2 w-10 text-center border-transparent">x3{amount}</span>
			<button className="bg-remove w-8 h-8 bg-no-repeat bg-cover" />
		</div>
	);
};

export default NewMember;
