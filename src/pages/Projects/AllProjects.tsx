import { ChangeEvent, useState } from 'react';
import FilterBar from '../../components/Projects/FilterBar/FilterBar';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList';

export type FilterState = {
  search: string;
  filter: string;
};

const AllProjects = () => {
  const [queries, setQueries] = useState<FilterState>({ search: '', filter: '' });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueries(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <FilterBar onChange={onChangeHandler} value={queries} />
      <ProjectsList queries={queries} />
    </>
  );
};

export default AllProjects;
