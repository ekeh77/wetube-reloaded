import express from "express";

const PORT = 4000;

const app = express();

const handelHome = (req, res) => {
    return res.send("<h1>I still love you.</h1>");
}

const handleLogin = (req, res) =>{
    return res.send({ message: "Login here." });
}

app.get("/", handelHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(4000, handleListening);