import express from "express";
import { updateUser } from "./users-db.js";
const app = express();
app.put("/", (req, res) => {
});
updateUser(1, { name: "hello" });
app.listen(3000, () => {
    console.log("Started listening on port 3000");
});
