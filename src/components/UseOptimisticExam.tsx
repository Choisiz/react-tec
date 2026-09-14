import { useOptimistic, useRef, useState } from "react";

type Message = {
  text: string;
  sending?: boolean;
  key?: number;
};

type ThreadProps = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
};

function Thread({ messages, sendMessage }: ThreadProps) {
  const formRef = useRef<HTMLFormElement>(null);

  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message") as string); //임시메세지 추가
    formRef.current?.reset(); //폼 리셋
    await sendMessage(formData); //메세지 서버전송
  }

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true,
    },
  ]);

  return (
    <>
      {/*optimisticMessages: 화면에 먼저 보여줄 임시값 */}
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>(sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="메세지입력하세요" />
        <button type="submit">send</button>
      </form>
    </>
  );
}

async function deliverMessage(message: string) {
  //1초간 대기후 반환
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export default function UseOptimisticExam() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "기본메세지", sending: false, key: 1 },
  ]);
  async function sendMessage(formData: FormData) {
    const sentText = await deliverMessage(formData.get("message") as string);
    setMessages((messages) => [...messages, { text: sentText }]);
  }

  return (
    <div>
      <h2>UseOptimistic 사용하기</h2>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
}
