import React from "react";
import FormName from "../FORMS/FormName/FormName";

const InputArea = () => {
	return (
		<div className="w-[330px] h-[500px] p-10  bg-white relative mx-auto top-[-90px] rounded-xl md:top-0 md:rounded-none md:w-[490px]">
			{/* <button className="absolute right-0 top-0 px-1 font-bold text-lg">X</button> */}
			<FormName />
		</div>
	);
};

export default InputArea;
