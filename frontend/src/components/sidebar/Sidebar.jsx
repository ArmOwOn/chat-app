import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};
export default Sidebar;
