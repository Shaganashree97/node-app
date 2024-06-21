import express from 'express'

const router = express.Router()

// CRUD functionality

// data/data
/*
router.get('/data', (req, res) => {
    res.send("Get all data lists");
})
 */

// data/
// to read
router.get('/', (req, res) => {
    res.send("Get all data lists");
})

// to create
router.post('/', (req, res) => {
    res.send("Create a data");
})

// to update
router.put('/:id', (req, res) => {
    res.send("Update data");
})

// to delete
router.delete('/:id', (req, res) => {
    res.send("Delete data");
})


export default router;
