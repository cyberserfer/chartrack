const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		savageWorlds: SavageWorlds!
    }
    type SavageWorlds {
        id: String
        races: [Race]
        skills: [Skill]
    }	
	type Race {		
		name: String
		edges: [String]
		hindrances: [String]		
    }
    type Skill {		
		name: String
		attribute: String
	}    
`;