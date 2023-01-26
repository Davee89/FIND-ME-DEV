import React from "react";
import Button from "../../UI/Button/Button";

const Nav = () => {
	return (
		<div className="w-[330px] h-[100px] mt-[-60px] bg-white mx-auto rounded-xl flex justify-between items-center p-10 md:mt-0 md:rounded-none md:w-[490px]">
			<Button name="Go Back" />
			<Button name="Next Step" />
		</div>
	);
};

export default Nav;