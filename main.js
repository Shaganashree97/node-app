import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
    res.json({ msg: "Hello Shagana!" });
});

// CRUD functionality

// to read
app.get('/data', () => {})

// to create
app.post('/data', () => {})

// to update
app.put('/data/:id', () => {})

// to delete
app.delete('/data/:id', () => {})


app.listen(PORT, () => {
    console.log(`The Server is running at http://localhost:${PORT}`);
});

