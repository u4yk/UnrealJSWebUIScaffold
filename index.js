const {callbackConstructor, WebUiCallback} = require('./WebUiCallback')
Context.RunFile('aliases.js')
Context.RunFile('polyfill/unrealengine.js')
Context.RunFile('polyfill/timers.js')

const GameInst = GWorld.GetGameInstance()
const uiKey = 'Cef'
let timeout = 0

const callTimeout = () => {
    if (!GameInst[uiKey]) {
        timeout = setTimeout(callTimeout, 100)
    } else {
        clearTimeout(timeout)
        const IP = 'localhost'
        GameInst.serverAddress = `http://${IP}:5173/?t=${Math.random()*4611686018427387904}`
        callbackConstructor.apply(GameInst)
        GameInst[uiKey].OnInterfaceEvent = WebUiCallback.bind(GameInst)
    }
} 

callTimeout()