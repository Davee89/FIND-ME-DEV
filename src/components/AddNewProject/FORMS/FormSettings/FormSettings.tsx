import { useEffect, useState } from "react";
import RadioInput from "../../../UI/RadioInput/RadioInput";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import { Project } from "../../Modal/Modal";

type SettingsProps = {
	level: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const FormSettings = ({ level, onChange }: SettingsProps) => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Choose project level</h2>

			<div className="flex flex-col gap-4 h-[300px] justify-center">
				<RadioInput
					src="/public/junior.png"
					id="junior"
					name="level"
					classname="w-[250px] md:w-[500px]"
					onChange={onChange}
					value={level}
				/>
				<RadioInput
					src="/public/mid.png"
					id="mid"
					name="level"
					classname="w-[250px] md:w-[500px]"
					onChange={onChange}
					value={level}
				/>
				<RadioInput
					src="/public/senior.png"
					id="senior"
					name="level"
					classname="w-[250px] md:w-[500px] "
					onChange={onChange}
					value={level}
				/>
			</div>
		</form>
	);
};

export default FormSettings;
