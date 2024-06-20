import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "Hello Shagana!" });
});

app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`);
});

