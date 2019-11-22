const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
	Query: {
		user: async (parent, args) => {
			const { email } = args;
			const user = await User.findOne({ email });
			if (!user) return new Error('User not found');
			return user;
		},
		users: async (parent, args) => {
			return await User.find({});
		}
	},
	Mutation: {
		addUser: async (parent, args) => {
			const { email, password } = args;

			const hashedPassword = bcrypt.hashSync(password, 10);
			const user = new User({ email, password: hashedPassword });
			const createdUser = await user.save();

			return createdUser;
		},
		logIn: async (parent, args) => {
			const { email, password } = args;
			const user = await User.findOne({ email });
			if (!user) return new Error('Incorrect username or password');
			const validPass = await bcrypt.compare(password, user.password);
			if (!validPass) return new Error('Incorrect username or password');
			return user;
		},
		removeUser: async (parent, args) => {
			const { email } = args;

			const removed = await User.findOneAndRemove({ email });
			if (!removed) return new Error('Email not found');
			return removed;
		}
	}
};
