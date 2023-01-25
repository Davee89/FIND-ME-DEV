import React from "react";

const InputImage = () => {
	return (
		<div className="relative h-[32px] w-[32px] border rounded-full ">
			<label className="z-10 absolute h-full" htmlFor="image">
				<img className="h-full rounded-full" src="../../../../public/background.webp" alt="" />
			</label>
			<input className="z-20 opacity-100 absolute w-full h-full " name="image" type="checkbox" />
		</div>
	);
};

export default InputImage;
