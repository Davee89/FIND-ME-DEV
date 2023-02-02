import Input from "../../../UI/Input/Input";
import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

type FormProps = {
	name: string;
	type: string;
	description: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
};

const FormName = ({ name, type, description, onChange }: FormProps) => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8">Start new project! </h2>
			<Input onChange={onChange} label="Name your project:" name="name" type="text" value={name} />

			<SelectedInput
				onChange={onChange}
				value={type}
				name="type"
				label="Select project type"
				options={["--------------", "Frontend", "Backend", "Fullstack", "Other"]}
			/>

			<div className="mb-6 flex flex-col ">
				<label className="text-center mb-2" htmlFor="description">
					Add short description
				</label>
				<textarea
					onChange={onChange}
					value={description}
					className="border shadow-md text-center rounded-lg p-2"
					name="description"
					cols={30}
					rows={4}></textarea>
			</div>
		</form>
	);
};

export default FormName;
