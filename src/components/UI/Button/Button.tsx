const Button = ({
	name,
	onClick,
	disabled,
}: {
	name: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`p-4 rounded-lg shadow-sm font-semibold shadow-gray-600 hover:bg-gradient-to-b from-blue-200 to-cyan-200 hover:text-white disabled:opacity-50 disabled:hover:bg-none disabled:hover:text-black`}>
			{name}
		</button>
	);
};

export default Button;
