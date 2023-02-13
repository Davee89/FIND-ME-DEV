import SidebarStep from '../SidebarStep/SidebarStep';

const Sidebar = ({ page }: { page: number }) => {
  return (
    <div className="flex gap-2 p-4 h-40 font-manrope justify-center items-start bg-logo bg-cover md:flex-col md:h-[100%] md:justify-start md:p-10 md:gap-6">
      <SidebarStep count={1} active={page === 1} name="Name your project" />
      <SidebarStep count={2} active={page === 2} name="Select stack and tools" />
      <SidebarStep count={3} active={page === 3} name="Set settings" />
      <SidebarStep count={4} active={page === 4} name="Add required positions" />
    </div>
  );
};

export default Sidebar;
