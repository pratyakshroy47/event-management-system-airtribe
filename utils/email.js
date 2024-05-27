const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pratyakshroy47@gmail.com',
        pass: '12345'
    }
});

const sendRegistrationEmail = async (email) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: 'You have successfully registered!'
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendRegistrationEmail };
