const mongoose = require('mongoose');

const rentalSchema =new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    returned: { type: Boolean, default: false }
});

module.exports = mongoose.model('Rental', rentalSchema);