import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Message } from "../../common";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const userId = useRef(`user-${Math.floor(Math.random() * 10000)}`).current;

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



  const sendMessage = (message: Message) => {
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    socketRef.current.send(JSON.stringify(message));
  };
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <h1>Chat App</h1>
      <MessageList messages={messages} currentUser={userId} />
      <div ref={messagesEndRef} />
      <MessageForm userId={userId} onSend={sendMessage} />
    </div>
  );
}

export default App