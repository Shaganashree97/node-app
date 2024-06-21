import express from "express";
import dataRoutes from "./routes/data.route.js";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "Hello Shaganashree!" });
});


// middlewares
// CLIENT -> MIDDLEWARE -> SERVER
app.use('/data', dataRoutes)


app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`);
});

