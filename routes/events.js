const express = require('express');
const {
    createEventHandler,
    updateEventHandler,
    deleteEventHandler,
    getEventHandler,
    registerForEventHandler
} = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createEventHandler);
router.put('/:id', updateEventHandler);
router.delete('/:id', deleteEventHandler);
router.get('/:id', getEventHandler);
router.post('/:id/register', registerForEventHandler);

module.exports = router;
