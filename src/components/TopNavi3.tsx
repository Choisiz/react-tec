import { NavLink } from "react-router";

export default function TopNavi3() {
  return (
    <nav>
      <NavLink to="/ReduxBasicApp">3. 리덕스 기본사용법</NavLink>
      <br />
      <NavLink to="/TodoApp">3. 리덕스 할일관리</NavLink>
      <br />
    </nav>
  );
}
