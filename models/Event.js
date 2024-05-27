const events = [];
let eventId = 0;

const createEvent = ({ date, time, description }) => {
    const event = { id: eventId++, date, time, description, participants: [] };
    events.push(event);
    return event;
};

const findEventById = (id) => {
    return events.find(event => event.id == id);
};

const updateEvent = (id, { date, time, description }) => {
    const event = findEventById(id);
    if (event) {
        event.date = date;
        event.time = time;
        event.description = description;
        return event;
    }
    return null;
};

const deleteEvent = (id) => {
    const index = events.findIndex(event => event.id == id);
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    }
    return false;
};

const registerParticipant = (eventId, email) => {
    const event = findEventById(eventId);
    if (event) {
        if (!event.participants.includes(email)) {
            event.participants.push(email);
        }
        return event;
    }
    return null;
};

module.exports = {
    createEvent,
    findEventById,
    updateEvent,
    deleteEvent,
    registerParticipant
};
