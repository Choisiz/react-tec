import { NavLink } from "react-router";

export default function TopNavi() {
  return (
    <nav>
      <NavLink to="/use-optimistic">optimistic</NavLink>
      <NavLink to="/use-action-state">action</NavLink>
      <NavLink to="/use-form-status">form</NavLink>
    </nav>
  );
}
