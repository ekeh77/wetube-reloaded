import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev")

const handelHome = (req, res) => {
    return res.send("<h1>I still love you.</h1>");
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge");
};

app.use(logger("dev"));
app.get("/", handelHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);