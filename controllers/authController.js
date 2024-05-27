const jwt = require('jsonwebtoken');
const { addUser, findUserByEmail, authenticateUser } = require('../models/user');
const { sendRegistrationEmail } = require('../utils/email');

const register = async (req, res) => {
    const { email, password, isOrganizer } = req.body;

    if (findUserByEmail(email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await addUser({ email, password, isOrganizer });

    await sendRegistrationEmail(email);

    res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await authenticateUser(email, password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email, isOrganizer: user.isOrganizer }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { register, login };
