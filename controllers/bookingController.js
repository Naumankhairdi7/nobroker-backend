const transporter = require('../config/mail');
const Booking = require('../models/Booking');
const Property = require('../models/Property');

exports.createBooking = async (req, res) => {
    try {
        const { name, phone, email, propertyType, message, propertyId } = req.body;
        const property = await Property.findById(propertyId);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        const booking = await Booking.create({ name, phone, email, propertyType, message, propertyId });

        await transporter.sendMail({
            to: property.ownerEmail,
            subject: 'New Property Booking Request',
            text: `You have a new booking request from ${name} (${email}, ${phone}):
Property Type: ${propertyType}
Message: ${message}`,
        });

        res.status(201).json({ message: 'Booking request sent to owner' });
    } catch (err) {
        res.status(500).json({ message: 'Booking failed' });
    }
};
