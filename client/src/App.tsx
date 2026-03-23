import {useEffect ,useRef, useState  } from "react";
import "./App.css";
import { Message } from "../../common";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<string>("");
  const [text, setText] = useState<string>(""); 

  const socketRef = useRef<WebSocket | null>(null); 

  useEffect(() => {
    socketRef.current = new WebSocket("ws://127.0.0.1:8081");
  
    socketRef.current.onopen = () => {
      console.log("socket connected");
    };
  
    socketRef.current.onerror = (error) => {
      console.log("socket error", error);
    };
  
    socketRef.current.onclose = () => {
      console.log("socket closed");
    };
  
    socketRef.current.onmessage = (event) => {
      const message: Message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };
  
    return () => {
      socketRef.current?.close();
    };
  }, []);

  const sendMessage = ()=>{
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN){
      return;
    }
    if(!user.trim()|| !text.trim()){
      return;
    }
    const message :Message = {
      user,
      text
    };
    socketRef.current.send(JSON.stringify(message));
    setText("")
  };

  return(
    <div>
    <h1>Chat App</h1>
    <input 
    type="text"
    placeholder="Your name"
    value={user}
    onChange={(e) => setUser(e.target.value)}
     />
    <input
      type="text"
      placeholder="Write a message"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
       <button onClick={sendMessage}>Send</button>

       <div>
        {messages.map((msg, index)=>(
          <p key = {index}>
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
       </div>
    </div>
  );
}

export default App