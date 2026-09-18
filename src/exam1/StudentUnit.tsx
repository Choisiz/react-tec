import useStudentStore from "./useStudentStore";

export default function StudentUnit({ id, name, isHere }) {
  const { deleteStudent, toggleAttendance } = useStudentStore();
  const nameStyle = {
    TextDecoration: isHere ? "line-through" : "none",
    color: isHere ? "gray" : "black",
    cursor: "pointer",
  };

  return (
    <div>
      <span style={nameStyle} onClick={() => toggleAttendance(id)}>
        {name}
      </span>
      <button
        onClick={() => {
          if (window.confirm("삭제할까요?")) {
            deleteStudent(id);
          }
        }}
      >
        삭제
      </button>
    </div>
  );
}
