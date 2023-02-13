type Props = {};

const FilterBar = (props: Props) => {
  return (
    <div className="md:col-[1/5] lg:col-[2/5] md:row-span-1 flex justify-between items-center md:p-10 md:h-[100%] pt-12 pb-2 px-5 gap-4 md:border-b ">
      <input className="p-2 rounded-lg shadow-lg" type="text" />
      <select className="p-2 rounded-lg shadow-lg" name="" id="">
        <option value="">Filter projects</option>
      </select>
    </div>
  );
};

export default FilterBar;
