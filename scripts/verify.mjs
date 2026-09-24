import { chromium } from 'playwright'

const BASE = 'http://localhost:4173'

const checks = {
  '/': [
    { text: 'Iniciar sesión', x: 835, y: 212 },
    { text: 'Tu familia,', x: 90, y: 270 },
    { text: 'ALARMA FAMILIAR', x: 90, y: 84 },
    { text: 'Correo electrónico', x: 835, y: 302 },
    { text: 'Contraseña', x: 835, y: 410 },
    { text: 'correo@ejemplo.com', value: true },
    { text: 'INGRESAR' },
    { text: '¿Olvidaste tu contraseña?' },
    { text: '¿No tienes una cuenta?' },
    { text: 'REGISTRARME' },
  ],
  '/inicio': [
    { text: 'Hola, Juan', x: 80, y: 106 },
    { text: 'Organiza las actividades de tu familia', x: 80, y: 155 },
    { text: 'PRÓXIMA ALARMA' },
    { text: 'Cita médica de Samuel', x: 115, y: 288 },
    { text: 'ACCIONES RÁPIDAS' },
    { text: 'SOS' },
    { text: 'UBICACIÓN' },
    { text: 'Alarmas familiares', x: 80, y: 487 },
    { text: 'Cita médica', x: 105, y: 571, exact: true },
    { text: 'Reunión escolar', x: 525, y: 571 },
    { text: 'Reunión legal', x: 945, y: 571 },
    { text: '+ PROGRAMAR ALARMA' },
  ],
  '/alarmas': [
    { text: 'Alarmas familiares', x: 80, y: 106 },
    { text: 'Eventos y recordatorios compartidos', x: 80, y: 155 },
    { text: 'PRÓXIMAS', x: 80, y: 217 },
    { text: 'HISTORIAL', x: 190, y: 217 },
    { text: 'Cita médica de Samuel', x: 110, y: 328 },
    { text: 'Reunión escolar', x: 530, y: 328 },
    { text: 'Reunión legal', x: 950, y: 328 },
  ],
  '/crear': [
    { text: 'Crear alarma', x: 80, y: 107 },
    { text: 'Selecciona el tipo de evento', x: 80, y: 155 },
    { text: 'Tipo de evento', x: 80, y: 219, exact: true },
    { selector: ['.af-choice', 0], x: 80, y: 265 },
    { selector: ['.af-choice', 1], x: 380, y: 265 },
    { selector: ['.af-choice', 2], x: 680, y: 265 },
    { selector: ['.af-choice', 3], x: 80, y: 370 },
    { selector: ['.af-choice', 4], x: 380, y: 370 },
    { selector: ['.af-choice', 5], x: 680, y: 370 },
    { text: 'Nombre del evento', x: 80, y: 507 },
    { text: 'CONTINUAR' },
  ],
  '/crear/fecha-hora': [
    { text: 'Fecha y hora', x: 80, y: 107 },
    { text: 'Fecha', x: 80, y: 237, exact: true },
    { text: 'Hora', x: 540, y: 237, exact: true },
    { text: 'Repetir', x: 80, y: 374 },
    { text: 'Avisar con anticipación', x: 80, y: 530 },
    { text: 'Compartir con', x: 540, y: 530 },
    { text: '30 minutos antes', value: true },
    { text: 'Mamá, Papá', value: true },
    { text: 'CONTINUAR' },
  ],
  '/crear/lugar': [
    { text: 'Lugar y detalles', x: 80, y: 107 },
    { text: 'Agrega la ubicación relacionada con el evento', x: 80, y: 155 },
    { text: 'Lugar', x: 80, y: 237, exact: true },
    { text: 'Dirección', x: 80, y: 352 },
    { text: 'Notas', x: 80, y: 467 },
    { text: 'Av. Principal # 10-20', value: true },
    { text: 'Llevar documentos médicos', value: true },
    { text: 'MAPA', x: 939, y: 400, exact: true },
    { text: 'CONTINUAR' },
  ],
  '/crear/confirmacion': [
    { text: '¡Alarma creada!', x: 588, y: 290 },
    { text: 'El evento fue compartido con tu familia', x: 582, y: 349 },
    { text: 'Cita médica de Samuel', x: 440, y: 443 },
    { text: 'Fecha · 08/09/2026', x: 440, y: 504 },
    { text: 'Hora · 3:00 p. m.', x: 440, y: 544 },
    { text: 'Lugar · Hospital Central', x: 440, y: 584 },
    { text: 'Aviso · 30 minutos antes', x: 440, y: 624 },
    { text: 'VER MIS ALARMAS' },
    { text: 'VOLVER AL INICIO' },
  ],
}

const browser = await chromium.launch()
let failures = 0
let passes = 0

for (const [route, items] of Object.entries(checks)) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
  await page.goto(BASE + route, { waitUntil: 'networkidle' })
  const screen = await page.locator('.screen').boundingBox()

  for (const item of items) {
      if (item.value) {
      const exists = await page
        .locator('input')
        .evaluateAll((els, val) => els.some((el) => el.value === val), item.text)
      if (!exists) {
        console.log(`FAIL ${route} input value missing: "${item.text}"`)
        failures++
        continue
      }
      console.log(`ok   ${route} input="${item.text}"`)
      passes++
      continue
    }

    if (item.selector) {
      const el = page.locator(item.selector[0]).nth(item.selector[1])
      const box = await el.boundingBox()
      const x = box.x - screen.x
      const y = box.y - screen.y
      const tol = 1
      const ok = Math.abs(x - item.x) <= tol && Math.abs(y - item.y) <= tol
      if (ok) {
        console.log(`ok   ${route} ${item.selector[0]}[${item.selector[1]}] @ (${Math.round(x)},${Math.round(y)})`)
        passes++
      } else {
        console.log(`FAIL ${route} ${item.selector[0]}[${item.selector[1]}] expected (${item.x},${item.y}) got (${Math.round(x)},${Math.round(y)})`)
        failures++
      }
      continue
    }
    const el = page.getByText(item.text, { exact: item.exact }).first()
    if ((await el.count()) === 0) {
      console.log(`FAIL ${route} text missing: "${item.text}"`)
      failures++
      continue
    }
    if (item.x !== undefined || item.y !== undefined) {
      const box = await el.boundingBox()
      if (!box) {
        console.log(`FAIL ${route} no box "${item.text}"`)
        failures++
        continue
      }
      const x = box.x - screen.x
      const y = box.y - screen.y
      const tol = 8
      let ok = true
      if (item.x !== undefined && Math.abs(x - item.x) > tol) ok = false
      if (item.y !== undefined && Math.abs(y - item.y) > tol) ok = false
      if (ok) {
        console.log(`ok   ${route} "${item.text}" @ (${Math.round(x)},${Math.round(y)})`)
        passes++
      } else {
        console.log(`FAIL ${route} "${item.text}" expected (${item.x},${item.y}) got (${Math.round(x)},${Math.round(y)})`)
        failures++
      }
    } else {
      console.log(`ok   ${route} "${item.text}"`)
      passes++
    }
  }
  await page.close()
}

await browser.close()
console.log(`\nRESULT: ${passes} passed, ${failures} failed`)
process.exit(failures === 0 ? 0 : 1)