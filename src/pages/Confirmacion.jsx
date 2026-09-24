import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { CheckIcon } from '../components/Icons'
import { useAlarm } from '../context/useAlarm'

const SUMMARY_ROW_Y = [84, 124, 164, 204]

export default function Confirmacion() {
  const navigate = useNavigate()
  const { alarm } = useAlarm()
  const date = alarm.date.replace(/ /g, '')

  const rows = [
    `Fecha · ${date}`,
    `Hora · ${alarm.time}`,
    `Lugar · ${alarm.place}`,
    `Aviso · ${alarm.advance}`,
  ]

  return (
    <div className="screen">
      <Navbar active="alarmas" />

      <div className="af-check-circle">
        <CheckIcon size={38} strokeWidth={3} />
      </div>

      <span
        style={{
          position: 'absolute',
          left: 588,
          top: 290,
          width: 264,
          textAlign: 'center',
          color: 'var(--af-texto)',
          fontWeight: 800,
          fontSize: 34,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}
      >
        ¡Alarma creada!
      </span>
      <span
        style={{
          position: 'absolute',
          left: 582,
          top: 349,
          width: 276,
          textAlign: 'center',
          color: 'var(--af-muted)',
          fontSize: 15,
        }}
      >
        El evento fue compartido con tu familia
      </span>

      {/* Resumen */}
      <div
        className="af-card"
        style={{ position: 'absolute', left: 400, top: 420, width: 640, height: 280, padding: '28px 40px 0' }}
      >
        <div style={{ fontWeight: 700, fontSize: 22, color: 'var(--af-texto)' }}>{alarm.name}</div>
        {rows.map((row, i) => (
          <div key={i} style={{ position: 'absolute', left: 40, top: SUMMARY_ROW_Y[i], fontSize: 15 }}>
            {row}
          </div>
        ))}
      </div>

      <PrimaryButton
        onClick={() => {
          navigate('/alarmas')
        }}
        style={{ position: 'absolute', left: 480, top: 760, width: 480 }}
      >
        Ver mis alarmas
      </PrimaryButton>
      <SecondaryButton
        onClick={() => navigate('/inicio')}
        style={{ position: 'absolute', left: 480, top: 830, width: 480 }}
      >
        Volver al inicio
      </SecondaryButton>
    </div>
  )
}