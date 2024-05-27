const bcrypt = require('bcryptjs');

const users = [];

const addUser = async ({ email, password, isOrganizer }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashedPassword, isOrganizer };
    users.push(user);
    return user;
};

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

const authenticateUser = async (email, password) => {
    const user = findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    }
    return null;
};

module.exports = {
    addUser,
    findUserByEmail,
    authenticateUser
};
