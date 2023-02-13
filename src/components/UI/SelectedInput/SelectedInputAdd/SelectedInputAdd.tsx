type selectedInputProps = {
  options: string[];
  label: string;
  classname?: string;
  button?: boolean;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const SelectedInputAdd = ({ options, label, classname, button, name, onChange, onClick }: selectedInputProps) => {
  return (
    <div className="mb-6 flex flex-col">
      <label className="text-center mb-2" htmlFor="category">
        {label}
      </label>
      <div className="flex justify-between  ">
        <select
          onChange={onChange}
          className={` ${classname} shadow-md text-center border rounded-lg p-2 w-52 md:w-[365px] `}
          name={name}
          required
        >
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          onClick={onClick}
          className="w-10 h-10 border shadow-md rounded-lg bg-add bg-no-repeat bg-center hover:bg-addHoover hover:bg-slate-200"
        ></button>
      </div>
    </div>
  );
};

export default SelectedInputAdd;
