import React from "react";

const Button = ({ name }) => {
	return (
		<button className="p-4 rounded-lg shadow-sm font-semibold shadow-gray-600 hover:bg-gradient-to-b from-blue-400 to-blue-700 hover:text-white">
			{name}
		</button>
	);
};

export default Button;
