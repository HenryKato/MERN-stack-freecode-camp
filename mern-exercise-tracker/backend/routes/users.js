const express = require('express'); // Get the server;
const router = express.Router(); // Create an instance of the router
let User = require('../models/user.model'); // Handle for the mongoose User created earlier

// ================= START SETTING UP THE ROUTES USING THE ROUTER ==================
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username}); // Instantiate a new user based on username
    newUser.save()
           .then(() => res.json('User added successfully'))
           .catch(err => res.json(err)); // Save the new user
});

module.exports = router;