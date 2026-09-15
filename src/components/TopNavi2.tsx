import { NavLink } from "react-router";

export default function TopNavi() {
  return (
    <nav>
      <NavLink to="/use-optimistic">optimistic</NavLink>
      <br />
      <NavLink to="/use-action-state">action</NavLink>
      <br />
      <NavLink to="/use-form-status">form</NavLink>
    </nav>
  );
}
