import React from "react";
import Member from "../UI/Member/Member";

const NewMember = ({ role, amount }) => {
	return (
		<div className="flex justify-between items-center py-2 gap-2">
			<p className="w-[90%] border p-2 font-semibold rounded-xl shadow-md bg-white ">
				{role}Frontend Dev
				<span className="ml-14 font-extrabold">3{amount}</span>
			</p>

			<button className="bg-remove w-8 h-8 bg-no-repeat bg-cover hover:animate-vibrate" />
		</div>
	);
};

export default NewMember;
