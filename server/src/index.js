import corsMiddleware from "./middlewares/cors.js";
import { config as configDotenv } from "dotenv";
import { app } from "./app.js";
configDotenv();

// constants
const PORT = process.env.PORT || 3000;

// middlewares
app.use(corsMiddleware);

// routes
app.get("/", (req, res) => {
  res.send("Welcome To KrishiNET");
});

app.listen(PORT, () => console.log("Server is running.."));
