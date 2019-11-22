const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
	items: [{ type: mongoose.Schema.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('Sheet', sheetSchema);
