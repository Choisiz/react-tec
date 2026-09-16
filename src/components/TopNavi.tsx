import { NavLink } from "react-router";

export default function TopNavi() {
  return (
    <nav>
      <NavLink to="/use-reducer">1. useReducer</NavLink>
      <br />
      <NavLink to="/use-context">1. useContext</NavLink>
    </nav>
  );
}
