type Props = {};

const FilterBar = (props: Props) => {
	return (
		<div className="md:col-[2/5] md:row-span-1 flex justify-between items-center p-10 h-[100%] border-b ">
			<input className="p-2 rounded-lg" type="text" />
			<select className="p-2 rounded-lg" name="" id="">
				<option value="">Filter projects</option>
			</select>
		</div>
	);
};

export default FilterBar;
