import { NavLink } from "react-router";

export default function TopNavi() {
  return (
    <nav>
      <NavLink to="/use-reducer">useReducer</NavLink>
      <NavLink to="/use-context">useContext</NavLink>
    </nav>
  );
}
