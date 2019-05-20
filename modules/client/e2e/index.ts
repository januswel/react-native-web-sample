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

const runScenario = async (browser: Puppeteer.Browser) => {
  const page = await openPage(browser, ENTRY_POINT, OPTIONS)
  await page.waitForSelector('[data-testid="add-button"]')
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/initial.png` })

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/initial.png` })

  await page.type('[data-testid="input-title"]', 'e2e')
  await page.type('[data-testid="input-detail"]', 'use puppeteer')
  await page.click('[data-testid="add-button"]')
  await page.waitForSelector('[data-testid="todo-2"]')

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/added.png` })

  await page.click('[data-testid="update-button-2"]')
  await clearInput(page, '[data-testid="input-title-2"]')
  await page.type('[data-testid="input-title-2"]', 'write an E2E test scenario')
  await clearInput(page, '[data-testid="input-detail-2"]')
  await page.type('[data-testid="input-detail-2"]', 'use puppeteer\nrefer: https://pptr.dev/')
  await page.click('[data-testid="modify-button-2"]')
  await page.waitForSelector('[data-testid="todo-2"]')

  await page.screenshot({ path: `${SCREENSHOTS_DIR}/updated.png` })

  await page.click('[data-testid="delete-button-1"]')
  await page.waitForSelector('[data-testid="network-indicator"]', { hidden: true })

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
