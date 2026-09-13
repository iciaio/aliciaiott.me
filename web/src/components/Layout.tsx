import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
