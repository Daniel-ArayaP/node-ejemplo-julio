const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    iva:  {type: Number, required: false },
    costoEnvio:  {type: Number, required: false },
    description: { type: String, required: true },
    image: {
        path: {type: String, required: true},
        public_id: { type: String, required: true}
    },
    uri: { type: String, required: true},
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

module.exports = model('Product', ProductSchema);