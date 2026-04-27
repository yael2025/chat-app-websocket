# 💬 WebSocket Chat App

## 📌 Description
This project is a simple real-time chat application built as part of a Fullstack course.

The application demonstrates the difference between traditional HTTP communication and WebSocket communication by implementing a live chat system where multiple clients can send and receive messages instantly.

---

## 🚀 Technologies Used

### Client
- React (Vite)
- TypeScript

### Server
- Node.js
- WebSocket (`ws` library)
- TypeScript

---

## ⚙️ How It Works

- A WebSocket server listens for incoming client connections.
- When a client sends a message:
  - The server receives it
  - Then broadcasts it to all connected clients
- All connected clients receive updates in real time without refreshing the page

---

## 🧠 Key Concepts Demonstrated

- WebSocket connection (persistent connection)
- Real-time communication
- Client-server architecture
- Broadcasting messages to multiple clients
- Shared types between client and server (`common.ts`)

---

## 📁 Project Structure

chat-app/
│
├── client/        # React frontend
├── server/        # WebSocket backend
├── common.ts      # Shared types (Message)

---

## ▶️ How to Run the Project

### 1. Run the Server

cd server
npm install
npm run dev

Server runs on:
ws://localhost:8081

---

### 2. Run the Client

cd client
npm install
npm run dev

Open in browser:
http://localhost:5174/

---

## 🧪 How to Test

1. Open the app in two browser windows
2. Enter a username in both
3. Send a message in one window
4. The message should appear instantly in both windows

---

## 📷 Example Behavior

- User A sends: "Hello"
- User B instantly sees:
  User A: Hello

---

## ⚠️ Notes

- The server uses WebSocket (not HTTP)
- Port 8081 is used to avoid conflicts with other services
- If the port is busy, you can change it in both:
  - server.ts
  - App.tsx

---

## ✅ Summary

This project demonstrates how WebSockets enable real-time communication, unlike HTTP which follows a request-response model.

---

## 👩‍💻 Author
Yael
