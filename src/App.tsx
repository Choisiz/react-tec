import { Routes, Route } from "react-router";
import TopNavi from "./components/TopNavi";
import TopNavi2 from "./components/TopNavi2";
import TopNavi3 from "./components/TopNavi3";
import UseReducerExam from "./components/UseReducerExam";
import UseContextExam from "./components/UseContextExam";
import UseOptimisticExam from "./components/UseOptimisticExam";
import UseActionStateExam from "./components/UseActionStateExam";
import UseFormStatusExam from "./components/UseFormStatusExam";
import { Provider as BasicProvider } from "react-redux";
import { store } from "./exam1/store";
import ReduxBasicApp from "./exam1/ReduxBasicApp";
import { Provider as TodoProvider } from "react-redux";
import TodoApp from "./exam1/TodoApp";

function App() {
  return (
    <>
      <TopNavi></TopNavi>
      <TopNavi2></TopNavi2>
      <TopNavi3></TopNavi3>
      {/*리듀서, context API */}
      <Routes>
        <Route path="/" element={<UseReducerExam />}></Route>
        <Route path="/use-reducer" element={<UseReducerExam />}></Route>
        <Route path="/use-context" element={<UseContextExam />}></Route>
      </Routes>
      {/*리액트18 신기능 */}
      <Routes>
        <Route path="/use-optimistic" element={<UseOptimisticExam />}></Route>
        <Route
          path="/use-action-state"
          element={<UseActionStateExam />}
        ></Route>
        <Route path="/use-form-status" element={<UseFormStatusExam />}></Route>
      </Routes>
      {/*리덕스 */}
      <Routes>
        <Route
          path="/ReduxBasicApp"
          element={
            <BasicProvider store={store}>
              <ReduxBasicApp />
            </BasicProvider>
          }
        ></Route>
        <Route
          path="/TodoApp"
          element={
            <TodoProvider store={store}>
              <TodoApp />
            </TodoProvider>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
