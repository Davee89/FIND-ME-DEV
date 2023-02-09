import { useEffect, useState } from "react";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import { Project } from "../../Modal/Modal";

type SettingsProps = {
	level: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const FormSettings = ({ level, onChange }: SettingsProps) => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Set main settings</h2>
			<div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start md:mb-8">
				<div className="flex flex-col items-center gap-2 "></div>
			</div>
			<SelectedInput
				onChange={onChange}
				value={level}
				name="level"
				classname={`w-40 md:w-auto self-center md:self-auto `}
				label="Project level"
				options={["------", "Junior", "Mid", "Senior"]}
			/>
		</form>
	);
};

export default FormSettings;
