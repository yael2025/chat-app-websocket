import { useState } from "react";
import { Message } from "../../../common";

interface Props {
  userId: string;
  onSend: (message: Message) => void;
}

function MessageForm({ userId, onSend }: Props) {
  const [text, setText] = useState<string>("");

  const handleSend = () => {
    if (!text.trim()) {
      return;
    }

    onSend({
      user: userId,
      text,
    });

    setText("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Write a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==="Enter"){
            handleSend()
          }
        }}
        className="input"
      />
  
      <button onClick={handleSend} className="button">
        Send
      </button>
    </div>
  );
}

export default MessageForm;
