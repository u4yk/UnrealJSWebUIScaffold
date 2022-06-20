const {callbackConstructor} = require('./WebUiCallback')

if (typeof GameInst === 'object') {
    callbackConstructor.call(GameInst)
}