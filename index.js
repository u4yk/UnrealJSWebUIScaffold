const {callbackConstructor, WebUiCallback, stateList} = require('./WebUiCallback')

const IP = '172.26.209.127'
console.log('What is my new function???????????????????????????????????????????', typeof GameInst.assignSelfToHandler)
if (!GameInst.hasWebUiCallbackOverride) {
    GameInst.serverAddress = `http://${IP}:3000/?t=${Math.random()*4611686018427387904}`
    stateList.forEach(v => {
        if (this[v] && this.isValid(this[v])) {
            this[v].gameInst = GameInst
        }
    })

    callbackConstructor.call(GameInst)
    GameInst.WebUiCallback = WebUiCallback.bind(GameInst)
    GameInst.WebUiStart()
    GameInst.hasWebUiCallbackOverride = true
}