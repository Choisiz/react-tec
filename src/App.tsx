import { Routes, Route } from "react-router";
import TopNavi from "./components/TopNavi";
import TopNavi2 from "./components/TopNavi2";
import UseReducerExam from "./components/UseReducerExam";
import UseContextExam from "./components/UseContextExam";
import UseOptimisticExam from "./components/UseOptimisticExam";

function App() {
  return (
    <>
      <TopNavi></TopNavi>
      <TopNavi2></TopNavi2>
      <Routes>
        <Route path="/" element={<UseReducerExam />}></Route>
        <Route path="/use-reducer" element={<UseReducerExam />}></Route>
        <Route path="/use-context" element={<UseContextExam />}></Route>
      </Routes>
      <Routes>
        <Route path="/use-optimistic" element={<UseOptimisticExam />}></Route>
        {/* <Route path="/use-action-state" element={<UseActionStateExam />}></Route> */}
        {/* <Route path="/use-form-statuse" element={<UseFormStatusExam />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
