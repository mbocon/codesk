const express = require('express')
const router = express.Router()
const User = require('../models/User')


// Model
const Posts = require('../models/Posts');

// Index
router.get('/', (req, res) => {
    Posts.find({}, (err, foundPosts) => {
        res.json(foundPosts);
    })
})

// Create
router.post('/', (req, res)=> {
    Posts.create(req.body, (err, createdItem) => {
        res.json(createdItem);
    })
})


// Put
router.put('/:id', (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
        res.json(updatedModel);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    Posts.findByIdAndDelete(req.params.id, (err, data) => {
        res.json(data)
    })
})

module.exports = router;