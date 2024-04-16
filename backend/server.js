import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from request.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world!"); //root route http://localhost:5000/
// });

console.log(`Connecting to MongoDB...`);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on < http://localhost:${PORT} >`);
});
