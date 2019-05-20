import * as Puppeteer from 'puppeteer'

const openPage = async (browser: Puppeteer.Browser, url: string, options?: Puppeteer.EmulateOptions) => {
  const page = await browser.newPage()
  if (options) {
    await page.emulate(options)
  }
  await page.goto(url)

  return page
}

export default openPage
