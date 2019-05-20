import { Page } from 'puppeteer'

const clearInput = async (page: Page, selector: string) => {
  await page.evaluate((query: string) => {
    const target = document.querySelector(query) as HTMLInputElement
    if (target) {
      target.value = ''
    }
  }, selector)
}

export default clearInput
