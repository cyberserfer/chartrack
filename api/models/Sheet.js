const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Skill = {
  baseAttribute: String,
  name: String,
  value: Number
};

export const Sheet = new Schema({
  details: {
      playerName: String,
      playerId: String,
      campaign: String,
      characterName: String,
      description: String,
      race: String,
      height: String,
      weight: String,
      hair: String,
      eyes: String,
      experience: Number
  },
  attributes: {
    agility: Number,
    smarts: Number,
    spirit: Number,
    strength: Number,
    vigor: Number
  },
  skills: [Skill],
  edges: [{ type: mongoose.Schema.ObjectId, ref: "Edge" }],
  hindrances: [{ type: mongoose.Schema.ObjectId, ref: "Hindrance" }],
  items: [{ type: mongoose.Schema.ObjectId, ref: "Item" }],
  powers: [{ type: mongoose.Schema.ObjectId, ref: "Power" }],
  currentPoints: {
    // Base 5
    attributePoints: Number,
    // Base 12
    skills: Number
  },
});
module.exports = mongoose.model("Sheet", Sheet);
