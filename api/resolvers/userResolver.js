const User = require('../models/User');
const Character = require('../models/Character');
const { UserInputError } = require('apollo-server');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = async (user, secret, expiresIn) => {
	const { email } = user;
	return await jwt.sign({ email }, secret, { expiresIn });
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
		signUp: async (parent, args, { secret }) => {
			const { email, password } = args;

			const hashedPassword = bcrypt.hashSync(password, 10);
			const user = new User({ email, password: hashedPassword });
			const createdUser = await user.save();			
			return { token: createToken(createdUser, secret, '30d') };
		},
		signIn: async (parent, args, { secret }) => {
			const { email, password } = args;

			const user = await User.findOne({ email });

			if (!user) {
				throw new UserInputError('Email or password are incorrect.');
			}

			const validPass = await bcrypt.compare(password, user.password);
			if (!validPass) {
				throw new UserInputError('Email or password are incorrect.');
			}

			return { token: createToken(user, secret, '30d') };
		},		
	},
	User: {
		characters: (user, args) => {
			return Character.find({ userId: user.email });
		}
	}
};


	