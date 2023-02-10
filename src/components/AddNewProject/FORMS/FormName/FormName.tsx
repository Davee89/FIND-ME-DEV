import Input from "../../../UI/Input/Input";

type FormProps = {
	name: string;
	description: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
};

const FormName = ({ name, description, onChange }: FormProps) => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Start new project! </h2>
			<Input onChange={onChange} label="Name your project:" name="name" type="text" value={name} />

			<div className="mb-6 flex flex-col ">
				<label className="text-center mb-2 text-gray-400 uppercase tracking-[2px]" htmlFor="description">
					Add description:
				</label>
				<textarea
					onChange={onChange}
					value={description}
					className="border shadow-lg text-center rounded-lg p-2 max-h-44 md:max-h-56 "
					name="description"
					cols={30}
					rows={8}></textarea>
			</div>
		</form>
	);
};

export default FormName;
