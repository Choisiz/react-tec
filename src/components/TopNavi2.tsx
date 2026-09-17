import { NavLink } from "react-router";

export default function TopNavi2() {
  return (
    <nav>
      <NavLink to="/use-optimistic">2. useOptimistic</NavLink>
      <br />
      <NavLink to="/use-action-state">2. useActionState</NavLink>
      <br />
      <NavLink to="/use-form-status">2. useFormStatus</NavLink>
    </nav>
  );
}
