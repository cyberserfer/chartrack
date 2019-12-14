const mongoose = require('mongoose');

const mongooseConnect = mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

module.exports = {
	mongooseConnect
};
