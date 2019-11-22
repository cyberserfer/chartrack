const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	type: {
		type: String
	},
	power: {
		type: Number
	}
});

module.exports = mongoose.model('Item', itemSchema);
