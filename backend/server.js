import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from request.body)
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world!"); //root route http://localhost:5000/
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
