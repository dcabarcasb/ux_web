import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const ROUTES = [
  ['/inicio', '01-inicio'],
  ['/alarmas', '02-alarmas'],
  ['/crear', '03-crear-alarma'],
  ['/crear/fecha-hora', '04-fecha-hora'],
  ['/crear/lugar', '05-lugar'],
  ['/crear/confirmacion', '06-confirmacion'],
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1024 } })
for (const [route, name] of ROUTES) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' })
  const screen = await page.locator('.screen').boundingBox()
  await page.screenshot({ path: `screenshots/${name}.png`, clip: { x: screen.x, y: screen.y, width: 1440, height: 1024 } })
  console.log(`captured screenshots/${name}.png`)
}

// Login has its own full-bleed layout
await page.goto(BASE + '/', { waitUntil: 'networkidle' })
const login = await page.locator('.screen').boundingBox()
await page.screenshot({ path: 'screenshots/00-login.png', clip: { x: login.x, y: login.y, width: 1440, height: 1024 } })
console.log('captured screenshots/00-login.png')

await browser.close()