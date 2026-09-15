import { useState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(formData: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`"${formData.get("name")}님이 요청완료됬습니다."`);
    }, 1000);
  });
}

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "제출중..." : "제출"}
    </button>
  );
};

export default function UseFormStatusExam() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData) => {
    const result = await submitForm(formData);
    setMessage(result);
  };

  return (
    <>
      <h2>UseFormStatusExam 사용하기</h2>
      <form action={handleSubmit}>
        <label>
          name: <input type="text" name="name" required />
        </label>
        <SubmitButton />
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
