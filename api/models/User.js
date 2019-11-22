const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: 'Please enter an email'
	},
	password: {
		type: String,
		required: 'Please enter a password'
	},
	sheets: [{ type: mongoose.Schema.ObjectId, ref: 'Sheet' }]
});

module.exports = mongoose.model('User', userSchema);
