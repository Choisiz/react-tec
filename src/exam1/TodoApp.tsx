import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";
import { useState } from "react";

export default function todoApp() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((nowState) => nowState.todos);

  const handleAdd = () => {
    console.log("todos", todos);
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <>
      <h2>할일 관리 앱 </h2>
      <input
        type="text"
        value={input}
        placeholder="할일입력하세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.idx}>
            <span
              style={{
                cursor: "pointer",
                textDecoration: todo.done ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleTodo(todo.idx))}
            >
              {todo.content}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.idx))}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
