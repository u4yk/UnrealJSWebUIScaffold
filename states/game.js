module.exports = {
    currentSection: 'menu',
    health: 0,
    healthMax: 0,
    isDead: false,
    isPaused: false,
    userStats: {},
    quit: false,
    newGame: false,
    loadGame: false,
    quests: [],
    playerInventory: [
        /**
         * {
         * id,
         * name,
         * type,
         * value,
         * quantity,
         * description
         * stats,
         * inUse,
         * }
         */
    ],
    otherInventory: {
        name: '',
        items: []
    },
}