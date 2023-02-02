import DatePicker from "react-date-picker";
import { useEffect, useState } from "react";
import Input from "../../../UI/Input/Input";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import { Project } from "../../Modal/Modal";

type SettingsProps = {
	date: Date | null;
	hours: number;
	level: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
	setProjectData: React.Dispatch<React.SetStateAction<Project>>;
};

const FormSettings = ({ date, hours, level, onChange, setProjectData }: SettingsProps) => {
	const [newDate, onChangeClock] = useState<Date | null>(new Date());

	useEffect(() => {
		setProjectData(prevData => ({
			...prevData,
			date: newDate,
		}));
	}, [newDate]);

	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Set main settings</h2>
			<div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start md:mb-8">
				<div className="flex flex-col items-center gap-2 ">
					<label htmlFor="DatePicker" className="md:text-center">
						Project start date
					</label>
					<DatePicker
						name="date"
						locale="en-US"
						className={`font-semibold bg-logo bg-cover h-10 shadow-lg w-40`}
						calendarClassName={`rounded-2xl bg-logo cover`}
						onChange={onChangeClock}
						value={date}
						minDate={new Date()}
					/>
				</div>
				<Input
					onChange={onChange}
					classname={`self-center text-center h-10 rounded-none w-40`}
					label="Weekly hours required"
					type="number"
					name="hours"
					value={hours}
					min={0}
					max={168}
				/>
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
