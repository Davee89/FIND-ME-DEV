import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

type Props = {};

const Header = (props: Props) => {
	return (
		<header className=" shadow-lg flex justify-between items-center max-w-[1400px] mx-auto h-28 px-10">
			<Link to="/">
				<img src="/logo.svg" className="w-40 " />
			</Link>
			<Menu />
		</header>
	);
};

export default Header;
