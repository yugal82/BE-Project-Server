const express = require('express');
const router = express.Router();
const { getUsers, postUser, editInfo, getUserByAddress } = require('../controllers/usersController')
 
router.get('/', async (req, res) => {
    res.status(200).send("The server is live and responding well")
});
router.get('/users', getUsers);
router.get('/user/:address', getUserByAddress);
router.post('/signup', postUser);
router.patch('/update-user/:address', editInfo);

module.exports = router;