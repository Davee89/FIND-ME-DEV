import { useContext } from 'react';
import { useFilter } from '.';
import FilterBar from '../../components/Projects/FilterBar/FilterBar';
import ProjectsList from '../../components/Projects/ProjectsList/ProjectsList';
import { LoggedContext } from '../../context/LoggedContext';
import NotLogged from './NotLogged';

type Props = {};

const MyProjects = (props: Props) => {
  const { queries, onChangeHandler } = useFilter();
  const { isLogged } = useContext(LoggedContext);
  return (
    <>
      <FilterBar onChange={onChangeHandler} value={queries} />
      {isLogged ? <ProjectsList queries={queries} /> : <NotLogged />}
    </>
  );
};

export default MyProjects;
