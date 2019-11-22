const Skills = require('../models/Skill');

module.exports = {
	Query: {
		skills: async (parent, args) => {
			const { game } = args
			const { skills } = await Skills.findOne({ game });						
			if (!skills) return new Error('Skills not found');
			return skills;
		}
	},	
};
