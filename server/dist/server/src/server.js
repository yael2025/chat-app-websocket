import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8081 });
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (msg) => {
        const messageObject = JSON.parse(msg.toString());
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messageObject));
            }
        });
    });
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
console.log("WebSocket server is running on port 8080");
