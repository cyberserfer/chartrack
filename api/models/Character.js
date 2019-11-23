const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
	userId: String,
	name: String,		
});

module.exports = mongoose.model('Character', characterSchema)
