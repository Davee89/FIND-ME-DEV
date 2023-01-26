import React from "react";

const SelectedInput = ({ option, label, classname, button }) => {
	return (
		<div className="mb-6 flex flex-col">
			<label className="text-center mb-2" htmlFor="category">
				{label}
			</label>
			<select className={` ${classname} shadow-md text-center border rounded-lg p-2  `} name="category">
				<option value={option.one}>{option.one}</option>
				<option value={option.two}>{option.two}</option>
				<option value={option.three}>{option.three}</option>
				{option.four && <option value={option.four}>{option.four}</option>}
				{option.five && <option value={option.five}>{option.five}</option>}
			</select>
		</div>
	);
};

export default SelectedInput;
