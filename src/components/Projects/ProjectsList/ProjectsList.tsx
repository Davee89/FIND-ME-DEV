import { dataBase } from "../../../assets/data";
import ProjectCard from "../ProjectCard/ProjectCard";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { Project } from "../../AddNewProject/Modal/Modal";

type Props = {};

const ProjectsList = () => {
	const [pagination, setPagination] = useState<{
		data: Project[];
		offset: number;
		numberPerPage: number;
		pageCount: number;
		currentData: Project[];
	}>({
		data: dataBase,
		offset: 0,
		numberPerPage: 3,
		pageCount: 0,
		currentData: [],
	});

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
		<div className="md:col-[2/5] md:row-[2/7]">
			<div className="md:col-[2/5] md:row-[2/7] py-4 flex md:flex-wrap md:flex-row gap-10 md:justify-between flex-col items-center md:w-[100%]">
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
