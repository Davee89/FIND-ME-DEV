const NewMember = ({
	role,
	amount,
	onClick,
}: {
	role: string;
	amount?: number | null;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<div className="flex justify-between items-center py-2 gap-2">
			<p className="w-[90%] border p-2 font-semibold rounded-xl shadow-md bg-white flex justify-between ">
				{role}
				<span className="font-extrabold ">{amount}</span>
			</p>

			<button onClick={onClick} className="bg-remove w-8 h-8 bg-no-repeat bg-cover hover:animate-vibrate" />
		</div>
	);
};

export default NewMember;
