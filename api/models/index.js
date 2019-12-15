const mongoose = require('mongoose');
const Edge = require('./Edge');
const Hindrance = require('./Hindrance');
const Item = require('./Item');
const Power = require('./Power');
const Sheet = require('./Sheet');
const User = require('./User');

const models = {
	Edge,
	Hindrance,
	Item,
	Power,
	Sheet,
	User
};

const mongooseConnect = mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true
});

module.exports = {
	mongooseConnect,
	models
};
