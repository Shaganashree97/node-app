import express from "express";
import dataRoutes from "./routes/data.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

// Data understanding middleware
app.use(express.json());  // raw in postman body
app.use(express.urlencoded({ extended: true }))   // urlencoded in postman body

// Connect DB
connectDB();

app.get("/", (req, res) => {
    res.json({ msg: "Hello Shaganashree!" });
});


// middlewares
// CLIENT -> MIDDLEWARE -> SERVER
app.use('/data', dataRoutes)


app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`);
});

