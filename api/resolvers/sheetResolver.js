const Sheet = require('../models/Sheet');
const Edge = require('../models/Edge');
const Hindrance = require('../models/Hindrance');
const Item = require('../models/Item');
const Power = require('../models/Power');

module.exports = {
	Query: {
		character: async (_, { input }) => {
			const sheet = await Sheet.findOne(input);
			if (!sheet) return new Error('No Savage Worlds character sheet found');
			return sheet;
		},
		characters: async (_, { input }) => {
			const sheets = await Sheet.find(input);
			if (!sheets) return new Error('Savage Worlds character sheets not found');
			return sheets;
		}
	},
	Mutation: {
		addSheet: async (_, { input }) => await new Sheet(input).save()
	},
	Sheet: {
		edges: async (parent, _, { me }) => {
			return await Edge.find();
		},
		hindrances: async (parent, _, { me }) => {
			return await Hindrance.find();
		},
		items: async (parent, _, { me }) => {
			return await Item.find();
		},
		powers: async (parent, _, { me }) => {
			return await Power.find();
		}
	}
};
