import Sidebar from "./main/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 overflow-y-scroll">{children}</div>
    </div>
  );
}
