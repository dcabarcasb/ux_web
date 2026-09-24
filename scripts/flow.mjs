import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
let failures = 0

async function expectRoute(path, label) {
  const ok = page.url().endsWith(path)
  console.log(`${ok ? 'ok   ' : 'FAIL '} flow: ${label} -> ${page.url()}`)
  if (!ok) failures++
}

// Navbar active state & logo position
await page.goto(BASE + '/inicio', { waitUntil: 'networkidle' })
const screenBox = await page.locator('.screen').boundingBox()
const logo = await page.locator('.af-nav-logo').boundingBox()
const lx = logo.x - screenBox.x
const ly = logo.y - screenBox.y
if (Math.abs(lx - 80) <= 2 && Math.abs(ly - 26) <= 3) {
  console.log(`ok   navbar logo @ (${Math.round(lx)},${Math.round(ly)})`)
} else {
  console.log(`FAIL navbar logo @ (${Math.round(lx)},${Math.round(ly)})`)
  failures++
}
for (const [key, cls] of [
  ['inicio', 'is-active'],
  ['alarmas', ''],
  ['mapa', ''],
  ['familia', ''],
  ['perfil', ''],
]) {
  const item = page.locator('.af-nav-item', { hasText: key }).first()
  const isActive = (await item.getAttribute('class')).includes('is-active')
  const ok = isActive === (cls === 'is-active')
  if (ok) console.log(`ok   navbar ${key} inactive (inicio page)`)
  else {
    console.log(`FAIL navbar ${key} state on /inicio`)
    failures++
  }
}

await page.goto(BASE + '/alarmas', { waitUntil: 'networkidle' })
const alarmasActive = (await page.locator('.af-nav-item', { hasText: 'Alarmas' }).first().getAttribute('class')).includes('is-active')
if (alarmasActive) console.log(`ok   navbar Alarmas active on /alarmas`)
else {
  console.log(`FAIL navbar Alarmas active on /alarmas`)
  failures++
}

// Wizard flow end-to-end
await page.goto(BASE + '/crear', { waitUntil: 'networkidle' })
await page.getByText('Horario escolar').first().click()
await page.locator('#af-name').fill('Partido de fútbol')
await page.getByText('CONTINUAR').first().click()
await expectRoute('/crear/fecha-hora', 'step 1 -> 2')

await page.getByText('CONTINUAR').first().click()
await expectRoute('/crear/lugar', 'step 2 -> 3')

await page.getByText('CONTINUAR').first().click()
await expectRoute('/crear/confirmacion', 'step 3 -> 4')

const summary = await page.locator('.screen', { hasText: 'Partido de fútbol' }).count()
if (summary) console.log(`ok   confirmation shows chosen name "Partido de fútbol"`)
else {
  console.log(`FAIL confirmation does not reflect wizard state`)
  failures++
}

await page.getByText('VER MIS ALARMAS').first().click()
await expectRoute('/alarmas', 'confirm -> alarmas')

await page.getByText('+ PROGRAMAR ALARMA').first().click()
await expectRoute('/crear', 'alarmas -> crear')

// Login -> Inicio
await page.goto(BASE + '/', { waitUntil: 'networkidle' })
await page.getByText('INGRESAR').first().click()
await expectRoute('/inicio', 'login -> inicio')

await browser.close()
console.log(`RESULT: ${failures === 0 ? 'ALL FLOW CHECKS PASSED' : failures + ' FAILURES'}`)
process.exit(failures === 0 ? 0 : 1)