
const express = require('express');
const usersRouter = express.Router();

const usersController = require('../controllers/users.controller')


usersRouter.get('/', usersController.getUsers)
usersRouter.post('/', usersController.postUser)
usersRouter.get('/:userId', usersController.getUser)

module.exports = usersRouter;
