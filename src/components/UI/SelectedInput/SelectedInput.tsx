type selectedInputProps = {
	options: string[];
	label: string;
	classname?: string;
	button?: boolean;
	name: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const SelectedInput = ({ options, label, classname, button, name, value, onChange }: selectedInputProps) => {
	return (
		<div className="mb-6 flex flex-col">
			<label className="text-center mb-2 text-gray-400 uppercase tracking-[2px]" htmlFor="category">
				{label}
			</label>
			<select
				onChange={onChange}
				className={` ${classname} shadow-md text-center border rounded-lg p-2  `}
				name={name}
				required>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectedInput;
