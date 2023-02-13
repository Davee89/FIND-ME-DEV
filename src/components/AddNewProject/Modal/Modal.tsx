import Overlay from '../Overlay/Overlay';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Sidebar from '../Sidebar/Sidebar';
import InputArea from '../InputArea/InputArea';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import { v4 as generateID } from 'uuid';

export interface Member {
  name: string;
  amount?: number | null;
}
export interface Project {
  id: string;
  name: string;
  description: string;
  framework: string;
  date: Date | null;
  level: string;
  team: Member[];
}

const Modal = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectData, setProjectData] = useState<Project>({
    id: generateID(),
    name: '',
    description: '',
    framework: '',
    date: new Date(),
    level: '',
    team: [],
  });

  const projectFormHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setProjectData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <Overlay />
      <ProjectContainer>
        <Sidebar page={pageNumber} />
        <div>
          <InputArea
            page={pageNumber}
            project={projectData}
            onChange={projectFormHandler}
            setProjectData={setProjectData}
          />
          <Nav page={pageNumber} setPage={setPageNumber} projectData={projectData} />
        </div>
      </ProjectContainer>
    </div>
  );
};

export default Modal;
