import { launch } from 'puppeteer'

const getBrowser = (isHeadless: boolean = false) => launch({ headless: isHeadless })

export default getBrowser
