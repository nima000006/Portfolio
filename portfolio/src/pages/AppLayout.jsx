import { createPortal } from "react-dom";

import { Outlet } from "react-router";
import SlideBar from "../component/SlideBar";
import ThemeColorSettings from "../component/ThemeColorSettings";

function AppLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_auto] h-screen">
      <aside className="bg-gray-800 text-white p-4">
        <SlideBar />
      </aside>

      <main className="bg-gray-100 overflow-auto">
        <Outlet />
      </main>
      {createPortal(
        <ThemeColorSettings/>,
        document.body
      )}
    </div>
  );
}

export default AppLayout;
