const { gql } = require('apollo-server-express');
const fs = require('fs');

module.exports = gql`
	extend type Query {
        getCharactersByUserId(userId: ID!): [SavageWorldsCharacterSheet!]
        getCharacterById(_id: ID): SavageWorldsCharacterSheet!
    }
    type Skill {
        baseAttribute: String,
        name: String,
        value: Int,
    }

    input SkillInput {
        baseAttribute: String,
        name: String,
        value: Int,
    }

    type Skills {
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
    }

    input SkillsInput {
        academics: SkillInput,
        athletics: SkillInput,
        battle: SkillInput,
        boating: SkillInput,
        commonKnowledge: SkillInput,
        driving: SkillInput,
        electronics: SkillInput,
        faith: SkillInput,
        fighting: SkillInput,
        focus: SkillInput,
        gambling: SkillInput,
        hacking: SkillInput,
        healing: SkillInput,
        intimidation: SkillInput,
        language: SkillInput,
        notice: SkillInput,
        occult: SkillInput,
        performance: SkillInput,
        persuasion: SkillInput,
        piloting: SkillInput,
        psionics: SkillInput,
        repair: SkillInput, 
        research: SkillInput,
        riding: SkillInput,
        science: SkillInput,
        shooting: SkillInput,
        spellcasting: SkillInput,
        stealth: SkillInput,
        survival: SkillInput,
        taunt: SkillInput,
        thievery: SkillInput,
        weirdScience: SkillInput
    }

    type Race {
        name: String,
        effects: [String]
    }

    input RaceInput {
        name: String,
        effects: [String]
    }
    type CharacterDetails {
        background: String,
        description: String,
        height: String,
        name: String,
        race: Race,
        weight: String,
        hair: String,
        eyes: String,
    }

    input CharacterDetailsInput {
        background: String,
        description: String,
        height: String,
        name: String,
        race: RaceInput,
        weight: String,
        hair: String,
        eyes: String,
    }

    type Attributes {
        agility: Int,
        smarts: Int,
        spirit: Int,
        strength: Int,
        vigor: Int,
    }

    input AttributesInput {
        agility: Int,
        smarts: Int,
        spirit: Int,
        strength: Int,
        vigor: Int,
    }

    type StartingPoints {
        attributePoints: Int,
        skills: Int
    }

    input StartingPointsInput {
        attributePoints: Int,
        skills: Int
    }

    input SavageWorldsCharacterSheetInput {
        details: CharacterDetailsInput
        startingPoints: StartingPointsInput
        attributes: AttributesInput
        skills: SkillsInput
        edges: [EdgeInput],
        hindrances: [HindranceInput],
        items: [ItemInput],
        powers: [PowerInput],
    }
    
	extend type Mutation {
		addSavageWorldsCharacterSheet(SavageWorldsCharacterSheet: SavageWorldsCharacterSheetInput): SavageWorldsCharacterSheet!
    }
    
	type SavageWorldsCharacterSheet {
        _id: ID!
        details: CharacterDetails
        startingPoints: StartingPoints
        attributes: Attributes
        skills: Skills
        edges: [Edge],
        hindrances: [Hindrance],
        items: [Item],
        powers: [Power],
	}
`;
