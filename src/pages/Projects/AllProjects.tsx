import { useFilter } from '.';
import FilterBar from '../../components/Projects/FilterBar/FilterBar';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList';

const AllProjects = () => {
  const { queries, onChangeHandler } = useFilter();

  return (
    <>
      <FilterBar onChange={onChangeHandler} value={queries} />
      <ProjectsList queries={queries} />
    </>
  );
};

export default AllProjects;
