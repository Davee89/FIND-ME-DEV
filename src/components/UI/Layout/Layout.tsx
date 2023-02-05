import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
