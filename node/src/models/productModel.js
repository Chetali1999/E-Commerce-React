const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    brand: {
        type: String,
    },
    quantity: {
        type: Number,
    },

    price : {
        type: Number,
    },
    image: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);