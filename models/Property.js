const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyType: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [String],
    ownerEmail: { type: String, required: true }, // Captures email of uploader
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
