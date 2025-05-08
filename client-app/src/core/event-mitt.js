import mitt from 'mitt'

const eventMitt = mitt()

export default {
    on$: (...args) => eventMitt.on(...args),
    emit$: (...args) => eventMitt.emit(...args)
}
