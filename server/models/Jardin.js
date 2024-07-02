const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jardinSchema = new Schema({
    name: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sensorPackId: String
});

jardinSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Jardin', jardinSchema);
