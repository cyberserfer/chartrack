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
});

module.exports = mongoose.model('User', userSchema);
