import React from "react";
import Input from "../../../UI/Input/Input";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

const FormName = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Start new project! </h2>
			<Input label="Name your project:" />

			<SelectedInput
				label="Select project type"
				option={{ one: "--------------", two: "Frontend", three: "Backend", four: "Fullstack", five: "Other" }}
			/>

			<div className="mb-6 flex flex-col ">
				<label className="text-center mb-2" htmlFor="description">
					Add short description
				</label>
				<textarea className="border shadow-md text-center rounded-lg p-2" name="description" cols="30" rows="4"></textarea>
			</div>
		</form>
	);
};

export default FormName;
