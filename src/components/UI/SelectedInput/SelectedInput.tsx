type selectedInputProps = {
	options: string[];
	label: string;
	classname?: string;
	button?: boolean;
};

const SelectedInput = ({ options, label, classname, button }: selectedInputProps) => {
	return (
		<div className="mb-6 flex flex-col">
			<label className="text-center mb-2" htmlFor="category">
				{label}
			</label>
			<select className={` ${classname} shadow-md text-center border rounded-lg p-2  `} name="category">
				{options.map(option => (
					<option value={option}>{option}</option>
				))}
			</select>
		</div>
	);
};

export default SelectedInput;
