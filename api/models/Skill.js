const mongoose = require('mongoose');

const skillsArraySchema = new mongoose.Schema({    
    name: {
        type: String
    },
    attribute: {
        type: String
    }
});

const skillsSchema = new mongoose.Schema({
    game: String,
    skills: [skillsArraySchema]
});

module.exports = mongoose.model('Skill', skillsSchema);
