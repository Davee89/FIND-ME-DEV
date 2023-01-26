import React from "react";

const Input = ({ name, type, value, label, title, classname, min, max }) => {
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