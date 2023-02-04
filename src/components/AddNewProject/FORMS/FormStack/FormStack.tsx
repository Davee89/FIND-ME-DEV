import SelectedInput from "../../../UI/SelectedInput/SelectedInput";
type StackProps = {
	language: string;
	framework: string;
	version: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const FormStack = ({ language, framework, version, onChange }: StackProps) => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8 ">Select preffered stack and tools</h2>
			<SelectedInput
				onChange={onChange}
				value={language}
				name="language"
				label="Programming language"
				options={["-------", "Javascript/Typescript", "Python"]}
			/>
			<SelectedInput
				onChange={onChange}
				value={framework}
				name="framework"
				label="Framework"
				options={["-------", "React", "Angular", "Vue"]}
			/>
			<SelectedInput
				onChange={onChange}
				value={version}
				name="version"
				label="Version-Control"
				options={["-------", "Github", "Gitlab", "Bitbucket"]}
			/>
		</form>
	);
};

export default FormStack;
