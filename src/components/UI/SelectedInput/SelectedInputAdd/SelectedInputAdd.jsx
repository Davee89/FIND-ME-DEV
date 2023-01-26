import React from "react";

const SelectedInputAdd = ({ option, label, classname, button }) => {
	return (
		<div className="mb-6 flex flex-col">
			<label className="text-center mb-2" htmlFor="category">
				{label}
			</label>
			<div className="flex justify-between  ">
				<select className={` ${classname} shadow-md text-center border rounded-lg p-2 w-52 md:w-[365px] `} name="category">
					<option value={option.one}>{option.one}</option>
					<option value={option.two}>{option.two}</option>
					<option value={option.three}>{option.three}</option>
					{option.four && <option value={option.four}>{option.four}</option>}
					{option.five && <option value={option.five}>{option.five}</option>}
				</select>
				<button className="w-10 h-10 border shadow-md rounded-lg bg-add bg-no-repeat bg-center hover:bg-addHoover hover:bg-slate-200"></button>
			</div>
		</div>
	);
};

export default SelectedInputAdd;