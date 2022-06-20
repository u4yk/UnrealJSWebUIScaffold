const stateList = [
    'audio',
    'game',
    'hud',
    'keyBinding',
    'menu',
    'video'
]

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
const callbackConstructor = function () {
    stateList.forEach(v => {
        const module = require(`./states/${v}`)
        // console.log(this)
        for (const [k, p] of Object.entries(module)) {
            const fx = `update${capitalize(v)}${capitalize(k)}`
            // console.log(`Callback Constructor:: method added -- ${fx}`)
            if (!this[fx]) {
                this[fx] = function (data) {}.bind(this)
            }
        }
    })
}

const WebUiCallback = function (name, data, callback) {
    try {
        this[name](data)
    } catch(e) {}
}

module.exports = {
    callbackConstructor,
    WebUiCallback,
    stateList
}