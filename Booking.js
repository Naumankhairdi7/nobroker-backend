const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    propertyType: String,
    message: String,
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
