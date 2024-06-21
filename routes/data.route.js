import express from 'express'
import { dataIndex, dataCreate, dataUpdate, dataDelete } from '../controllers/data.controller';

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
router.get('/', dataIndex);

// to create
router.post('/', dataCreate);

// to update
router.put('/:id', dataUpdate);

// to delete
router.delete('/:id', dataDelete);


export default router;
