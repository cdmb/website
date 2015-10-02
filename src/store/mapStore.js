import ajax from '../utils/ajax.js'

export default class MapStore {
    constructor(signal) {
        this.init(signal)
    }

    // These need to be defined
    // ajaxParams(key) { return params }
    processResponse(json) { return json }

    init(signal) {
        riot.observable(this)

        this._map = {}

        this.signal = signal

        this.on(riot.VEL(this.signal), (key, force) => {
            // console.log('mapstore:signal', this.signal, 'key:', key)
            if (this.forceKey) key = this.forceKey
            if (key) this.load(key, force)
        })
        riot.control.addStore(this)
    }

    async load(key, force) {
        // If doesn't have current key data, load
        let current = this._map[key]
        if (current === undefined || force) {
            this._map[key] = 'loading'
            this._map[key] = await this.processResponse(
                await ajax(
                    await this.ajaxParams(key)))
        }
        this.triggerChanged(key)
    }

    triggerChanged(key) {
        let value = this._map[key]
        if (value == 'loading') value = undefined
        this.trigger(riot.SEC(this.signal), {key, value})
    }
}
