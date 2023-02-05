import Navbar from "../Navbar/Navbar";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className="bg-header bg-no-repeat shadow-lg flex justify-between items-center max-w-[1400px] mx-auto h-28 px-10">
			<img src="" alt="" />
			<Navbar />
		</header>
	);
};

export default Header;
