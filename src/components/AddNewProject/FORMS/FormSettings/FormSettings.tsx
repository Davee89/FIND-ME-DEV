import DatePicker from "react-date-picker";
import { useState } from "react";
import Input from "../../../UI/Input/Input";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

const FormSettings = () => {
	const [value, onChange] = useState<Date | null>(null);

	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Set main settings</h2>
			<div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start md:mb-8">
				<div className="flex flex-col items-center gap-2 ">
					<label htmlFor="DatePicker" className="md:text-center">
						Project start date
					</label>
					<DatePicker
						locale="en-US"
						className={`font-semibold bg-logo bg-cover h-10 shadow-lg w-40`}
						calendarClassName={`rounded-2xl bg-logo cover`}
						onChange={onChange}
						value={value}
						minDate={new Date()}
					/>
				</div>
				<Input
					classname={`self-center text-center h-10 rounded-none w-40`}
					label="Weekly hours required"
					type="number"
					name="Weekly hours required"
					value={""}
					min={0}
					max={168}
				/>
			</div>
			<SelectedInput
				classname={`w-40 md:w-auto self-center md:self-auto `}
				label="Project level"
				options={["------", "Junior", "Mid", "Senior"]}
			/>
		</form>
	);
};

export default FormSettings;
