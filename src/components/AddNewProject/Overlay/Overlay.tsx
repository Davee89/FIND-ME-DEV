import { Link } from "react-router-dom";

const Overlay = () => {
	return <Link to="/" className="fixed top-0 left-0 z-10 opacity-50 bg-gray-900 w-screen h-screen"></Link>;
};

export default Overlay;
