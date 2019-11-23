const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        getCharactersByUserId(userId: ID!): [SavageWorldsCharacterSheet!]
        getCharacterById(_id: ID): SavageWorldsCharacterSheet!
    }
    type Skill {
        baseAttribute: String,
        name: String,
        value: Number,
    }
	extend type Mutation {
		addSavageWorldsCharacterSheet(
            details: {
                background: String,
                description: String,
                height: String,
                name: String,
                race: {
                    name: String,
                    effects: [Object]
                },
            },
            startingPoints: {
                attributePoints: Number,
                skills: Number
            },
            attributes: {
                agility: Number,
                smarts: Number,
                spirit: Number,
                strength: Number,
                vigor: Number,
            },
            description: {
                playerName: String,
                playerId: Number,
                campaign: String,
                characterName: String,
                characterId: Number,
                charDescription: String,
                race: String,
                height: String,
                weight: String,
                hair: String,
                eyes: String,
                createdDate: { type: Date, default: Date.now },
                updatedDate: { type: Date, default: Date.now },
            },
            skills: {
                academics: Skill,
                athletics: Skill,
                battle: Skill,
                boating: Skill,
                commonKnowledge: Skill,
                driving: Skill,
                electronics: Skill,
                faith: Skill,
                fighting: Skill,
                focus: Skill,
                gambling: Skill,
                hacking: Skill,
                healing: Skill,
                intimidation: Skill,
                language: Skill,
                notice: Skill,
                occult: Skill,
                performance: Skill,
                persuasion: Skill,
                piloting: Skill,
                psionics: Skill,
                repair: Skill, 
                research: Skill,
                riding: Skill,
                science: Skill,
                shooting: Skill,
                spellcasting: Skill,
                stealth: Skill,
                survival: Skill,
                taunt: Skill,
                thievery: Skill,
                weirdScience: Skill
            },
        }
        ): SavageWorldsCharacterSheet!
    }

	type SavageWorldsCharacterSheet {
        _id: ID!
        details: {
            background: String,
            description: String,
            height: String,
            name: String,
            race: {
                name: String,
                effects: [Object]
            },
        },
        startingPoints: {
            attributePoints: Number,
            skills: Number
        },
        attributes: {
            agility: Number,
            smarts: Number,
            spirit: Number,
            strength: Number,
            vigor: Number,
        },
        description: {
            playerName: String,
            playerId: Number,
            campaign: String,
            characterName: String,
            characterId: Number,
            charDescription: String,
            race: String,
            height: String,
            weight: String,
            hair: String,
            eyes: String,
            createdDate: { type: Date, default: Date.now },
            updatedDate: { type: Date, default: Date.now },
        },
        skills: {
            academics: Skill,
            athletics: Skill,
            battle: Skill,
            boating: Skill,
            commonKnowledge: Skill,
            driving: Skill,
            electronics: Skill,
            faith: Skill,
            fighting: Skill,
            focus: Skill,
            gambling: Skill,
            hacking: Skill,
            healing: Skill,
            intimidation: Skill,
            language: Skill,
            notice: Skill,
            occult: Skill,
            performance: Skill,
            persuasion: Skill,
            piloting: Skill,
            psionics: Skill,
            repair: Skill, 
            research: Skill,
            riding: Skill,
            science: Skill,
            shooting: Skill,
            spellcasting: Skill,
            stealth: Skill,
            survival: Skill,
            taunt: Skill,
            thievery: Skill,
            weirdScience: Skill
        },
        edges: [Edge],
        hindrances: [Hindrace],
        items: [Item],
        powers: [Power],
	}
`;
