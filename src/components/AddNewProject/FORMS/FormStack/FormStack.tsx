import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
import DatePicker from "react-date-picker";
import { useEffect, useState } from "react";
import { Project } from "../../Modal/Modal";

type StackProps = {
	date: Date | null;
	framework: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
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
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8 ">Select preffered stack and tools</h2>
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
			<fieldset className="border p-4 flex gap-5">
				<legend className="text-center">Pick framework</legend>
				<div>
					<input type="radio" name="framework" id="react" className="hidden peer" />
					<label htmlFor="react" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
				<div>
					<input type="radio" name="framework" id="vue" className="hidden peer" />
					<label htmlFor="vue" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
				<div>
					<input type="radio" name="framework" id="angular" className="hidden peer" />
					<label htmlFor="angular" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
				<div>
					<input type="radio" name="framework" id="angular" className="hidden peer" />
					<label htmlFor="angular" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
				<div>
					<input type="radio" name="framework" id="angular" className="hidden peer" />
					<label htmlFor="angular" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
				<div>
					<input type="radio" name="framework" id="angular" className="hidden peer" />
					<label htmlFor="angular" className="opacity-20 peer-checked:opacity-100">
						<img src="/public/react-logo.png" alt="React" />
					</label>
				</div>
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
