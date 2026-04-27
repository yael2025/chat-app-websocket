import { Message } from "../../../common";

interface Props {
  messages: Message[];
}

function MessageList({ messages }: Props) {
  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.user}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}

export default MessageList;