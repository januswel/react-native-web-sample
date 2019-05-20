import * as Puppeteer from 'puppeteer'

import getBrowser from './utils/get-browser'
import openPage from './utils/open-page'

const ENTRY_POINT = 'http://localhost:1234/'
const OPTIONS = {
  viewport: {
    width: 1024,
    height: 600,
  },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
}

const runScenario = async (browser: Puppeteer.Browser) => {
  const page = await openPage(browser, ENTRY_POINT, OPTIONS)
  await page.waitForSelector('[data-testid="add-button"]')
  await page.screenshot({ path: 'e2e.png' })
}

const main = async () => {
  const browser = await getBrowser(true)
  await runScenario(browser)
  await browser.close()
}

try {
  main()
} catch (e) {
  process.stderr.write(e.message)
}