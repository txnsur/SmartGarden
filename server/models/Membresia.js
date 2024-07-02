const mongoose = require('mongoose');

const membresiaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    durationDays: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Membresia = mongoose.model('Membresia', membresiaSchema);

module.exports = Membresia;
