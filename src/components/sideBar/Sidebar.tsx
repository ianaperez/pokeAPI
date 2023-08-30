import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <div id="container">
      <Link to="/pokemon/1">Bulbasaur</Link>
    </div>
  );
};

export { Sidebar };
