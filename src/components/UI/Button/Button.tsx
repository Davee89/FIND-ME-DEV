const Button = ({ name }: { name: string }) => {
	return (
		<button className="p-4 rounded-lg shadow-sm font-semibold shadow-gray-600 hover:bg-gradient-to-b from-blue-200 to-cyan-200 hover:text-white">
			{name}
		</button>
	);
};

export default Button;
