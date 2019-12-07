const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = {
    baseAttribute: String,
    name: String,
    value: Number,
}

const SavageWorldsCharacterSheet = new Schema({
    details: {
        background: String,
        description: String,
        height: String,
        name: String,
        race: {
            name: String,
            effects: [String]
        },
    },
    startingPoints: {
        // Base 5
        attributePoints: Number,
        // Base 12
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
        // TODO: do this for all skills
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
    edges: [{ type: mongoose.Schema.ObjectId, ref: 'EdgeHindrance' }],
    hindrances: [{ type: mongoose.Schema.ObjectId, ref: 'EdgeHindrance' }],
    items: [{ type: mongoose.Schema.ObjectId, ref: 'Item' }],
    powers: [{ type: mongoose.Schema.ObjectId, ref: 'Power' }],
});
module.exports = mongoose.model('SavageWorldsCharacterSheet', SavageWorldsCharacterSheet);
