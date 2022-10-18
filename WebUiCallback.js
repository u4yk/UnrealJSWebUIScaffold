const stateList = [
    'audio',
    'game',
    'hud',
    'keyBinding',
    'menu',
    'video',
    'phone'
]

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)
const callbackConstructor = function () {
    stateList.forEach(v => {
        const module = require(`./states/${v}`)
        const handle = capitalize(v)
        const handler = this.handlers[handle]
        
        for (const [k, p] of Object.entries(module)) {
            const method = capitalize(k)
            const fx = `set${handle}${method}`
            this[fx] = function (data) {
                console.log('derived method', handle, fx, method)
                handler[method](data)
            }.bind(this)
        }
    })
}

const WebUiCallback = function (name, data, callback) {
    try {
        console.log('Web UI callback', name)
        this[name](data)
    } catch(e) {}
}

module.exports = {
    callbackConstructor,
    WebUiCallback,
    stateList
}