type selectedInputProps = {
	options: string[];
	label: string;
	classname?: string;
	button?: boolean;
};

const SelectedInputAdd = ({ options, label, classname, button }: selectedInputProps) => {
	return (
		<div className="mb-6 flex flex-col">
			<label className="text-center mb-2" htmlFor="category">
				{label}
			</label>
			<div className="flex justify-between  ">
				<select className={` ${classname} shadow-md text-center border rounded-lg p-2 w-52 md:w-[365px] `} name="category">
					{options.map((option, i) => (
						<option key={i} value={option}>
							{option}
						</option>
					))}
				</select>
				<button className="w-10 h-10 border shadow-md rounded-lg bg-add bg-no-repeat bg-center hover:bg-addHoover hover:bg-slate-200"></button>
			</div>
		</div>
	);
};

export default SelectedInputAdd;
