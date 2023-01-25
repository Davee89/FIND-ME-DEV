import React from "react";
import InputImage from "../../../UI/InputImage/InputImage";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

const FormStack = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400">Select preffered stack and tools</h2>
			<InputImage />
		</form>
	);
};

export default FormStack;
