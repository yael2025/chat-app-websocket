import { Message } from "../../../common";

interface Props {
  messages: Message[];
  currentUser: string;
}

function MessageList({ messages, currentUser }: Props) {
  return (
    <div className="messages-container">
      {messages.map((msg, index) => {
        const isMe = msg.user === currentUser;

        return (
          <div
            key={index}
            className={`message ${isMe ? "me" : "other"}`}
          >
            <span className="user">{msg.user}</span>
            <span>{msg.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;