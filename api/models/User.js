const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please enter an email'
	},
	password: {
		type: String,
		required: 'Please enter a password'
	},
	sheets: [{ type: mongoose.Schema.ObjectId, ref: 'SavageWorldsCharacterSheet' }]
});

module.exports = mongoose.model('User', userSchema);
