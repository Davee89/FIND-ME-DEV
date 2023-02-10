import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import DatePicker from "react-date-picker";
import { useEffect, useState } from "react";
import { Project } from "../../Modal/Modal";
import RadioInput from "../../../UI/RadioInput/RadioInput";

type StackProps = {
	date: Date | null;
	framework: string;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	setProjectData: React.Dispatch<React.SetStateAction<Project>>;
};

const FormStack = ({ framework, onChange, date, setProjectData }: StackProps) => {
	const [newDate, onChangeClock] = useState<Date | null>(new Date());

	useEffect(() => {
		setProjectData(prevData => ({
			...prevData,
			date: newDate,
		}));
	}, [newDate]);

	return (
		<form className="flex flex-col gap-8">
			<h2 className="uppercase tracking-[10px] text-center text-gray-700 ">Select details</h2>
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="DatePicker" className="md:text-center text-gray-400 uppercase tracking-[2px]">
					Choose starting date:
				</label>
				<DatePicker
					name="date"
					locale="en-US"
					className={`font-semibold bg-logo h-10 shadow-lg w-[100%] text-center `}
					calendarClassName={`rounded-2xl bg-logo cover`}
					onChange={onChangeClock}
					value={date}
					minDate={new Date()}
				/>
			</div>
			<fieldset className="border rounded-2xl shadow-lg p-4 flex flex-wrap gap-5 justify-around">
				<legend className="text-center tracking-[2px] text-gray-400 uppercase">Pick framework</legend>
				<RadioInput src="/public/react.png" id="react" name="framework" onChange={onChange} value={framework} />
				<RadioInput src="/public/angular.png" id="angular" name="framework" onChange={onChange} value={framework} />
				<RadioInput src="/public/vue.svg" id="vue" name="framework" onChange={onChange} value={framework} />
				<RadioInput src="/public/ember.svg" id="ember" name="framework" onChange={onChange} value={framework} />
				<RadioInput src="/public/svelte.png" id="svelte" name="framework" onChange={onChange} value={framework} />
				<RadioInput src="/public/mithrill.png" id="mithrill" name="framework" onChange={onChange} value={framework} />
			</fieldset>
			{/* <SelectedInput
				onChange={onChange}
				value={framework}
				name="framework"
				label="Framework"
				options={["-------", "React", "Angular", "Vue"]}
			/> */}
		</form>
	);
};

export default FormStack;
