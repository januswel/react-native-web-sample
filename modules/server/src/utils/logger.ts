import debug from 'debug'

const LOGGER_NAME = 'app'
const CATEGORIES = ['info', 'warn', 'error']

const buildLoggers = <T extends string>(ids: Array<T>): { [K in T]: debug.Debugger } =>
  ids.reduce((accumulator, currentValue) => {
    const key = `${LOGGER_NAME}:${currentValue}`
    accumulator[currentValue] = debug(key)
    return accumulator
  }, Object.create(null))

export default buildLoggers(CATEGORIES)
