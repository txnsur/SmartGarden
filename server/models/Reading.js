const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    sensorId: {
        type: Schema.Types.ObjectId,
        ref: 'Sensor',
        required: true
    },
    value: { 
        type: Number, 
        required: true 
    },
    timeStamp: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Reading', readingSchema);
