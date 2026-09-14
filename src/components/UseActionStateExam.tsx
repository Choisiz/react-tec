import { useActionState } from "react";

async function authLogin(prevState, formData) {
  const userid = formData.get("userid");
  const userpw = formData.get("userpw");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  if (userid === "nika" && userpw === "1234") {
    return "로그인성공";
  } else {
    return "로그인실패";
  }
}

export default function UseActionStateExam() {
  const [message, formAction, isPending] = useActionState(authLogin, null);
  return (
    <>
      <h2> UseActionState 사용하기</h2>
      <form action={formAction}>
        id: <input type="text" name="userid" />
        <br />
        pw: <input type="text" name="userpw" />
        <br />
        <button type="submit">로그인</button>
        {isPending ? "loading.." : message}
      </form>
    </>
  );
}
