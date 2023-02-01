type memberProps = {
	src: string;
	title: string;
};
const Member = ({ src, title }: memberProps) => {
	return (
		<div className="h-[30px] w-[30px]">
			<img title={title} src={src} />
		</div>
	);
};

export default Member;
