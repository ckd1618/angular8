var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    // id: {type: Number},
    name: { type: String },
    qty: { type: Number },
    price: { type: Number },
}, { timestamps: true });
mongoose.model('Product', ProductSchema);