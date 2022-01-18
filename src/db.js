import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //useFindAndModify: false
    //useCreateIndex: true,
},);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB ");
const handleErroe = (error) => console.log("❌ DB Error", error);

db.on("error", handleErroe);
db.once("open", handleOpen);
