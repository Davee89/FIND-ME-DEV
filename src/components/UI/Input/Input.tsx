type inputProps = {
	name: string;
	type: string;
	value: string | number;
	label: string;
	classname?: string;
	min?: number;
	max?: number;
};

const Input = ({ name, type, value, label, classname, min, max }: inputProps) => {
	return (
		<div className="mb-6 flex flex-col ">
			<label className="text-center mb-2" htmlFor={name}>
				{label}
			</label>
			<input
				className={`border shadow-md ${classname} rounded-lg p-2 text-center`}
				name={name}
				value={value}
				type={type}
				min={min}
				max={max}
			/>
		</div>
	);
};

export default Input;
