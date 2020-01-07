const User = require('../models/User');
const { UserInputError } = require('apollo-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = async (user, secret, expiresIn) => {
	const { email, _id } = user;
	return await jwt.sign({ email, _id }, secret, { expiresIn });
};

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
		signUp: async (parent, { data }, { secret }) => {
			const { email, password } = data;

			const hashedPassword = bcrypt.hashSync(password, 10);
			const user = new User({ email, password: hashedPassword });
			const createdUser = await user.save();
			return { token: createToken(createdUser, secret, '30d'),  userId: user._id };
		},
		signIn: async (parent, { data }, { secret }) => {
			const { email, password } = data;

			const user = await User.findOne({ email });

			if (!user) {
				throw new UserInputError('Email or password are incorrect.');
			}

			const validPass = await bcrypt.compare(password, user.password);
			if (!validPass) {
				throw new UserInputError('Email or password are incorrect.');
			}
			return { token: createToken(user, secret, '30d'), userId: user._id };
		}
	}
};
