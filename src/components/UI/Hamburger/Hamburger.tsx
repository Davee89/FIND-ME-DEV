type Props = {
	isOpen: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
	return (
		<>
			<div className="md:hidden space-y-2" onClick={() => onClick(!isOpen)}>
				<span className="block h-0.5 w-8 animate-pulse bg-white"></span>
				<span className="block h-0.5 w-8 animate-pulse bg-white"></span>
				<span className="block h-0.5 w-8 animate-pulse bg-white"></span>
			</div>
		</>
	);
};
export default Hamburger;
