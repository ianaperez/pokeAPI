import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sideBar/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
