import { NavLink } from 'react-router-dom';

type Props = {
  src: string;
  to: string;
  name: string;
  amount?: number;
  hideSideBar: React.MouseEventHandler<HTMLAnchorElement>;
};

const NavBarLink = ({ to, src, name, amount = 1, hideSideBar }: Props) => {
  const activeClassName = { backgroundColor: '#FCA5A5' };
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
      onClick={hideSideBar}
      to={to}
      className="shadow-lg border hover:bg-red-300 border-red-300 p-1 w-[100%] rounded-full uppercase text-white flex justify-between px-6"
    >
      <div>
        <img src={src} />
        <p className="p-2">{name}</p>
      </div>
      <span className="px-4 py-2 bg-white bg-opacity-30 rounded-full">{amount}</span>
    </NavLink>
  );
};

export default NavBarLink;
