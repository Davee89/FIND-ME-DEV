import { ChangeEventHandler } from 'react';
import { dataBase } from '../../../assets/data';
import Input from '../../UI/Input/Input';

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  value: { search: string; filter: string };
};

const FilterBar = ({ onChange, value: { search, filter } }: Props) => {
  let filterOptions = Array.from(new Set(dataBase.map(project => project.framework)));

  return (
    <div className="md:col-[1/5] lg:col-[2/5] md:row-span-1 flex justify-between items-center md:p-10 md:h-[100%] pt-12 pb-2 px-5 gap-4 md:border-b ">
      <Input name="search" type="text" value={search} onChange={onChange} />
      <select className="p-2 rounded-lg shadow-lg" name="filter" value={filter} onChange={onChange}>
        <option value=""></option>
        {filterOptions.map((option, i) => (
          <option key={i} value={option}>
            {option.replace(option[0], option[0].toUpperCase())}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
