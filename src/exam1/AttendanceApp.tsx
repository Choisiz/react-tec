import { useState } from "react";
import useStudentStore from "./useStudentStore";
import StudentUnit from "./StudentUnit";

export default function AttendanceApp() {
  const [name, setName] = useState("");
  const { students, count, addStudent } = useStudentStore();

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const buttonValue = () => {
    if (name.trim()) {
      addStudent(name);
      setName("");
    }
  };
  return (
    <>
      <h2>출결관리</h2>
      <p>총 학생수: {count}</p>
      <input
        type="text"
        placeholder="이름입력하세요"
        value={name}
        onChange={inputValue}
      />
      <button onClick={buttonValue}>추가</button>
      <ol>
        {students.map((student) => (
          <StudentUnit key={student.id} {...student} />
        ))}
      </ol>
    </>
  );
}
