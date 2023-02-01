import Button from "../../UI/Button/Button";

type NavProps = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Nav = ({ page, setPage }: NavProps) => {
	const goBackHandler = (): void => {
		page !== 1 ? setPage(p => p - 1) : setPage(page);
	};

	const nextStepHandler = (): void => {
		page !== 4 ? setPage(p => p + 1) : setPage(page);
	};

	console.log(page);
	return (
		<div className="w-[330px] h-[100px] mt-[-60px] bg-white mx-auto rounded-xl flex justify-between items-center p-10 md:mt-0 md:rounded-none md:w-[490px]">
			<Button disabled={page === 1} name="Go Back" onClick={goBackHandler} />
			<Button name={page === 4 ? "Add project" : "Next Step"} onClick={nextStepHandler} />
		</div>
	);
};

export default Nav;
