import * as Puppeteer from 'puppeteer'

//const ENTRY_POINT = 'https://qiita.com/janus_wel'
const ENTRY_POINT = 'http://localhost:1234/'
const OPTIONS = {
  WIDTH: 1024,
  HEIGHT: 600,
  USER_AGENT:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
}

const getBrowser = () => Puppeteer.launch({ headless: false })
const openNewPage = (browser: Puppeteer.Browser) => browser.newPage()

const openPage = async (page: Puppeteer.Page) => {
  const options = {
    viewport: {
      width: OPTIONS.WIDTH,
      height: OPTIONS.HEIGHT,
    },
    userAgent: OPTIONS.USER_AGENT,
  }
  await page.emulate(options)
  await page.goto(ENTRY_POINT)
}

const runScenario = async (page: Puppeteer.Page) => {
  await openPage(page)
  await page.waitForSelector('[data-testid="add-button"]')
  await page.screenshot({ path: 'e2e.png' })
}

const main = async () => {
  let browser = null
  try {
    browser = await getBrowser()
    const page = await openNewPage(browser)
    await runScenario(page)
  } catch (e) {
    process.stderr.write(e.message)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

main()
