import FilterBar from '../../components/Projects/FilterBar/FilterBar';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList';

type Props = {};

const AllProjects = (props: Props) => {
  return (
    <>
      <FilterBar />
      <ProjectsList />
    </>
  );
};

export default AllProjects;
