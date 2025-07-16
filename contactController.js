const transporter = require('../config/mail');
const Contact = require('../models/Contact');

exports.contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        await Contact.create({ name, email, message });

        await transporter.sendMail({
            to: process.env.MAIL_USER,
            subject: 'New Contact Message',
            text: `From: ${name} (${email})\nMessage: ${message}`,
        });

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to send message' });
    }
};
