import SelectedInput from "../../../UI/SelectedInput/SelectedInput";

const FormStack = () => {
	return (
		<form>
			<h2 className="uppercase tracking-[10px] text-center text-gray-400 mb-8 ">Select preffered stack and tools</h2>
			<SelectedInput label="Programming language" options={["-------", "Javascript/Typescript", "Python"]} />
			<SelectedInput label="Framework" options={["-------", "React", "Angular", "Vue"]} />
			<SelectedInput label="Version-Control" options={["-------", "Github", "Gitlab", "Bitbucket"]} />
		</form>
	);
};

export default FormStack;
