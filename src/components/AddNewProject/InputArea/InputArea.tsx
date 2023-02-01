import FormName from "../FORMS/FormName/FormName";
import FormSettings from "../FORMS/FormSettings/FormSettings";
import FormStack from "../FORMS/FormStack/FormStack";
import FormMembers from "../FORMS/FormMembers/FormMembers";

type inputAreaProps = {
	page: number;
};

const InputArea = ({ page }: inputAreaProps) => {
	const displayPage = (page: number): JSX.Element => {
		switch (page) {
			case 1:
				return <FormName />;
				break;
			case 2:
				return <FormStack />;
				break;
			case 3:
				return <FormSettings />;
				break;
			case 4:
				return <FormMembers />;
				break;
			default:
				return <>Oops something went wrong with your request</>;
		}
	};

	return (
		<div className="w-[330px] h-[500px] p-10  bg-white relative mx-auto top-[-90px] rounded-xl md:top-0 md:rounded-none md:w-[490px]">
			{displayPage(page)}
		</div>
	);
};

export default InputArea;
