const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config()


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        // useCreateIndex: true, 
        
    })
    .then(() => (console.log('DB conection success...')))
    .catch(() => (console.log("Error")))


app.use(express.json());
app.use("/api/auth", authRoute);


app.listen(8800, () => {
    console.log("backen sever is running...");
})