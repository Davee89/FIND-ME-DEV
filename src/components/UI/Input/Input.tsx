type inputProps = {
	name: string;
	type: string;
	value: string | number;
	label: string;
	classname?: string;
	min?: number;
	max?: number;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	maxlength?: number;
};

const Input = ({ name, type, value, label, classname, min, max, onChange, maxlength }: inputProps) => {
	return (
		<div className="mb-6 flex flex-col ">
			<label className="text-center mb-2 text-gray-400 uppercase tracking-[2px]" htmlFor={name}>
				{label}
			</label>
			<input
				className={`border shadow-md ${classname} rounded-lg p-2 text-center`}
				name={name}
				value={value}
				type={type}
				min={min}
				max={max}
				onChange={onChange}
				required
				maxLength={maxlength}
			/>
		</div>
	);
};

export default Input;
