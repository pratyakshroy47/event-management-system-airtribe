const { createEvent, findEventById, updateEvent, deleteEvent, registerParticipant } = require('../models/Event');

const createEventHandler = (req, res) => {
    const { date, time, description } = req.body;
    const event = createEvent({ date, time, description });
    res.status(201).json(event);
};

const updateEventHandler = (req, res) => {
    const { id } = req.params;
    const { date, time, description } = req.body;
    const event = updateEvent(id, { date, time, description });

    if (!event) {
        return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
};

const deleteEventHandler = (req, res) => {
    const { id } = req.params;
    const success = deleteEvent(id);

    if (!success) {
        return res.status(404).json({ message: 'Event not found' });
    }

    res.status(204).send();
};

const getEventHandler = (req, res) => {
    const { id } = req.params;
    const event = findEventById(id);

    if (!event) {
        return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
};

const registerForEventHandler = (req, res) => {
    const { id } = req.params;
    const { email } = req.user;
    const event = registerParticipant(id, email);

    if (!event) {
        return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
};

module.exports = { createEventHandler, updateEventHandler, deleteEventHandler, getEventHandler, registerForEventHandler };
