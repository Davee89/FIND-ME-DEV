import { dataBase } from "../../../assets/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Project } from "../../AddNewProject/Modal/Modal";

const ProjectsList = () => {
	const pageAmount = window.innerWidth < 770 ? 2 : window.innerWidth < 1170 ? 4 : 6;

	const [pagination, setPagination] = useState<{
		data: Project[];
		offset: number;
		numberPerPage: number;
		pageCount: number;
		currentData: Project[];
	}>({
		data: dataBase,
		offset: 0,
		numberPerPage: pageAmount,
		pageCount: 0,
		currentData: [],
	});

	useEffect(() => {
		const handleResize = () => {
			const currentWindowWidth = window.innerWidth;
			let pageAmount = 6;

			if (currentWindowWidth < 1025) {
				pageAmount = 2;
			} else if (currentWindowWidth < 1370) {
				pageAmount = 4;
			}

			setPagination(prevState => ({
				...prevState,
				numberPerPage: pageAmount,
			}));
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const pageCount = Math.ceil(pagination.data.length / pagination.numberPerPage);
		const currentData = pagination.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage);

		setPagination(prevState => ({
			...prevState,
			pageCount,
			currentData,
		}));
	}, [pagination.numberPerPage, pagination.offset]);

	const handlePageClick = (selectedItem: { selected: number }) => {
		const offset = selectedItem.selected * pagination.numberPerPage;
		setPagination({ ...pagination, offset });
	};

	return (
		<div className="md:col-[1/5] lg:col-[2/5] md:row-[2/7] mx-auto lg:mx-0 my-5 flex flex-col gap-5 font-manrope">
			<div className="md:col-[2/5] md:row-[2/7] flex md:flex-wrap md:flex-row gap-10 gap-x-24 md:justify-start flex-col items-center md:content-start md:w-[100%] md:h-[90%]">
				{pagination.currentData && pagination.currentData.map(item => <ProjectCard key={item.id} {...item} />)}
			</div>
			<ReactPaginate
				previousLabel={"."}
				nextLabel={"."}
				breakLabel={"..."}
				pageCount={pagination.pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={2}
				onPageChange={handlePageClick}
				activeLinkClassName={"text-white bg-rose-400"}
				className={`flex gap-2 p-4 justify-center font-semibold rounded-full items-center `}
				pageLinkClassName={`py-2 px-4 rounded-lg bg-white`}
				previousLinkClassName={`px-4 text-transparent`}
				previousClassName={`rounded-lg bg-right bg-cover scale-x-[-1]`}
				nextLinkClassName={`px-4 text-transparent`}
				nextClassName={`rounded-lg bg-right bg-cover`}
			/>
		</div>
	);
};

export default ProjectsList;
