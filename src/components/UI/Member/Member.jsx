import React from "react";

const Member = ({ src, title }) => {
	return (
		<div className="h-[30px] w-[30px]">
			<img title={title} src={src} />
		</div>
	);
};

export default Member;
