import { Outlet, useOutletContext } from 'react-router-dom';
import Navbar from '../../components/Projects/Navbar/Navbar';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';

export type FilterState = {
  search: string;
  filter: string;
};

type OutletContext = {
  queries: FilterState;
  onChangeHandler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const Projects = () => {
  const [queries, setQueries] = useState<FilterState>({ search: '', filter: '' });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueries(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="max-w-[1400px] mx-auto h-[80vh] md:grid md:grid-cols-4 md:grid-rows-6 md:h-[80%] md:gap-5 md:mt-10 ">
      <Navbar />
      <Outlet context={{ onChangeHandler, queries }} />
    </div>
  );
};

export const useFilter = () => useOutletContext<OutletContext>();

export default Projects;
