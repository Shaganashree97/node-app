import express from 'express'

const router = express.Router()

// CRUD functionality

// data/data
// to read
router.get('/data', (req, res) => {
    res.send("Get all data lists");
})

// to create
router.post('/data', (req, res) => {
    res.send("Create a data");
})

// to update
router.put('/data/:id', (req, res) => {
    res.send("Update data");
})

// to delete
router.delete('/data/:id', (req, res) => {
    res.send("Delete data");
})


export default router;
