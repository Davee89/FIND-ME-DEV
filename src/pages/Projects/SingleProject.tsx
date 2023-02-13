import { useParams } from 'react-router-dom';
import { dataBase } from '../../assets/data';
import NewMember from '../../components/NewMember/NewMember';

const SingleProject = () => {
  const { projectId } = useParams();

  const projectData = dataBase.find(project => project.id === projectId);

  if (!projectData) return <div> Sorry no project with such ID</div>;

  return (
    <div className="md:col-[1/5] lg:col-[2/5] mx-4 lg:mx-0 font-manrope row-[1/7] p-10 bg-gray-100 border-rose-300 border-opacity-50 border-r-[10px] rounded-[50px] shadow-2xl ">
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] md:text-[40px]  uppercase font-semibold tracking-[10px]">{projectData.name}</h1>
          <img
            src={`/${projectData.framework}.png`}
            alt={projectData.framework}
            className="w-[50px] h-[50px] md:w-[128px] md:h-[128px]"
          />
        </div>
        <div className="">
          <p className="mt-[-15px] md:mt-[-40px] text-gray-400 opacity-50">
            {projectData.date && projectData.date.toUTCString().slice(0, -12)}
          </p>
          <p>Created by: Author</p>
        </div>
        <div className="mt-[50px] ">
          <h2 className="font-semibold">About:</h2>
          <p className="tracking-wider text-justify p-5">{projectData.description}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold">Roles in team: </h2>
          <div>
            {projectData.team.map((member, i) => (
              <NewMember key={i} role={member.name} onClick={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
