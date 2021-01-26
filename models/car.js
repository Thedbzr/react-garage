const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    year: {type: Number, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
},{
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);