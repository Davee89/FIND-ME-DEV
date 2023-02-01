const InputImage = () => {
	return (
		<div className="relative h-[32px] w-[32px] border rounded-full ">
			<label className="z-10 absolute h-full" htmlFor="image">
				<img className="h-full rounded-full" src="../../../../public/background.webp" alt="" />
			</label>
			<input className="z-10 opacity-5 absolute w-full h-full " name="image" type="checkbox" />
		</div>
	);
};

export default InputImage;
