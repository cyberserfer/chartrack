var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var swSchema = new Schema({
    playerName: String,
    playerId: Number,
    gameSystem: String,
    campaign: String,
    characterName: String,
    characterId: Number,
    charDescription: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },

    stats: {
        agility: {
            type: Number,
            default: 4
        },
        smarts: {
            type: Number,
            default: 4
        },
        spirit: {
            type: Number,
            default: 4
        },
        strength: {
            type: Number,
            default: 4
        },
        vigor: {
            type: Number,
            default: 4
        },
    },

    derivedStats: {
        pace: {
            type: Number,
            default: 0
        },
        parry: {
            type: Number,
            default: 0
        },
        toughness: {
            type: Number,
            default: 0
        },
        charisma: {
            type: Number,
            default: 0
        },
    },

    skills: {
        boating: {
            type: Number,
            default: 0
        },
        climbing: {
            type: Number,
            default: 0
        },
        driving: {
            type: Number,
            default: 0
        },
        fighting: {
            type: Number,
            default: 0
        },
        gambling: {
            type: Number,
            default: 0
        },
        healing: {
            type: Number,
            default: 0
        },
        intimidation: {
            type: Number,
            default: 0
        },
        investigation: {
            type: Number,
            default: 0
        },
    }
});