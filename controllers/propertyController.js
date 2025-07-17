const Property = require('../models/Property');

// Add property
exports.addProperty = async (req, res) => {
    try {
        const newProperty = new Property({ ...req.body });
        await newProperty.save();
        res.status(201).json({ message: 'Property listed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to list property' });
    }
};

// Get all properties with filters
exports.getProperties = async (req, res) => {
    try {
        const { city, propertyType, minPrice, maxPrice } = req.query;
        let filter = {};

        if (city) filter.city = city;
        if (propertyType) filter.propertyType = propertyType;
        if (minPrice || maxPrice) filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);

        const properties = await Property.find(filter);
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch properties' });
    }
};
