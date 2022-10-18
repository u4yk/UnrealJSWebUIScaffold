module.exports = {
    loadDialogue (path) {},
    updateDialogue (data) {
        this.Cef.Call('updateHudDialogue', {
            data
        })
    }
}