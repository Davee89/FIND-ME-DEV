import React from "react";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

const FormStack = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-10 md:mb-16">
				Select preffered stack and tools
			</h2>
			<SelectedInput
				label="Programming language"
				option={{ one: "-------", two: "Javascript/Typescript", three: "Python" }}
			/>
			<SelectedInput label="Framework" option={{ one: "-------", two: "React", three: "Angular", four: "Vue" }} />
			<SelectedInput
				label="Version-Control"
				option={{ one: "-------", two: "Github", three: "Gitlab", four: "Bitbucket" }}
			/>
		</form>
	);
};

export default FormStack;
