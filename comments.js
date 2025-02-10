// Create web server
// Create a route for the root URL
// Create a route for the /comments URL
// Create a route for the /comments/:id URL
// Export the router
const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

router.get('/', (req, res, next) => {
    res.json(comments);
});

router.get('/:id', (req, res, next) => {
    const comment = comments.find(comment => comment._id === parseInt(req.params.id));
    if (comment) {
        res.json(comment);
    } else {
        res.status(404).json({ message: `Comment not found with id: ${req.params.id}` });
    }
});

module.exports = router;