type Props = {
  src: string;
  id: string;
  name: string;
  classname?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
};

const RadioInput = ({ src, id, name, classname, onChange, value }: Props) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={id}
        className="hidden peer"
        value={id}
        onChange={onChange}
        checked={value === id}
      />
      <label htmlFor={id} className="opacity-30 peer-checked:opacity-100 ">
        <img
          src={src}
          alt={id}
          className={`w-14 h-14 md:w-[84px] md:h-[84px] ${classname}`}
          title={id.replace(id[0], id[0].toUpperCase())}
        />
      </label>
    </div>
  );
};

export default RadioInput;
