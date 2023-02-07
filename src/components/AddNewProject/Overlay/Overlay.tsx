import { Link, useNavigate } from "react-router-dom";

const Overlay = () => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(-1)} className="fixed top-0 left-0 z-10 opacity-50 bg-gray-900 w-screen h-screen"></div>
	);
};

export default Overlay;
