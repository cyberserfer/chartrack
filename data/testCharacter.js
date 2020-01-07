// _id: 5dfe737837f2e9c390603cad

const testCharacter = {
    details: {
        playerName: "Test Player",
        playerId: "5df3da6fb0ce483a75da1440",
        characterName: "Test Character",
        description: "This is a character created to test the application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula rutrum risus quis dapibus. Cras aliquam felis elit. Mauris id efficitur justo. Maecenas nec laoreet lacus, id consequat justo. Praesent congue laoreet tortor nec mollis. Integer molestie lacinia risus, id finibus tortor. Morbi mollis lobortis odio. Suspendisse potenti. Morbi accumsan augue ac tellus pellentesque tempor. Nulla nec fringilla sapien.",
        race: "Human",
        height: "5\"11\"",
        weight: "3 bills",
        hair: "blue",
        eyes:"6",
        experience: 0
    },
    attributes: {
        agility: 6,
        smarts: 4,
        spirit: 8,
        strength: 4,
        vigor: 6
    },
    currentPoints: {
        attributePoints: 5,
        skills: 12
    },
    skills: [
        {
            baseAttribute: "smarts",
            name: "Notice",
            value: 6
        },
        {
            baseAttribute: "agility",
            name: "Athletics",
            value: 4
        },
        {
            baseAttribute: "agility",
            name: "Fighting",
            value: 6
            },  
    ],
    edges: [
        {
            name: "Attractive",
            edgeType: "Background",
            description: "It’s  no  secret  people  are  more  willing  to  help those they find physically attractive. Your character adds +1 to Performance and Persuasion rolls if the target is attracted to his general type (gender, sex, species, etc.)."
        },
        {
            name: "Luck",
            effects: [
                "+1 Benny"
            ] 
        },
    ],
    hindrances: [
        {
            name: "Bloodthirsty",
            description: "Never takes prisoners",
            severity: "Major"
        },
        {
            name: "Cautious",
            description: "Character is overly careful",
            severity: "Minor"
        },
    ]
}