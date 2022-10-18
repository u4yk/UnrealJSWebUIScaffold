const flashlight = require('./phone/flashlight')
const mail = require('./phone/mail')
const music = require('./phone/music')
const phoneCall = require('./phone/phoneCall')

module.exports = {
    currentApp: '',
    isOpen: false,
    apps: [],
    recipes: [],
    quests: {},
    isCrafting: false,
    FlashlightEnabled: flashlight.enabled,
    mail,
    music,
    phoneCall
}