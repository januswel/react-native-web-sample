import * as Puppeteer from 'puppeteer'

import getBrowser from './utils/get-browser'
import openPage from './utils/open-page'
import clearInput from './utils/clear-input'

const ENTRY_POINT = 'http://localhost:1234/'
const OPTIONS = {
  viewport: {
    width: 1024,
    height: 600,
  },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
}
const SCREENSHOTS_DIR = 'screenshots'

const buildSelector = (id: string) => `[data-testid="${id}"]`

const runScenario = async (browser: Puppeteer.Browser) => {
  const page = await openPage(browser, ENTRY_POINT, OPTIONS)
  await page.waitForSelector(buildSelector('add-button'))
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/initial.png` })

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/initial.png` })

  await page.type(buildSelector('input-title'), 'e2e')
  await page.type(buildSelector('input-detail'), 'use puppeteer')
  await page.click(buildSelector('add-button'))
  await page.waitForSelector(buildSelector('todo-2'))

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/added.png` })

  await page.click(buildSelector('update-button-2'))
  await clearInput(page, buildSelector('input-title-2'))
  await page.type(buildSelector('input-title-2'), 'write an E2E test scenario')
  await clearInput(page, buildSelector('input-detail-2'))
  await page.type(buildSelector('input-detail-2'), 'use puppeteer\nrefer: https://pptr.dev/')
  await page.click(buildSelector('modify-button-2'))
  await page.waitForSelector(buildSelector('todo-2'))

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/updated.png` })

  await page.click(buildSelector('delete-button-1'))
  await page.waitForSelector(buildSelector('network-indicator'), { hidden: true })

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/delated.png` })
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
