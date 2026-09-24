import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'
import { ALARMS } from '../data/alarms'

const SM_CARD_X = [80, 500, 920]

export default function Inicio() {
  const navigate = useNavigate()
  const next = ALARMS[0]

  return (
    <div className="screen">
      <Navbar active="inicio" />

      {/* Header */}
      <span className="t-title" style={{ position: 'absolute', left: 80, top: 106 }}>
        Hola, Juan
      </span>
      <span className="t-subtitle" style={{ position: 'absolute', left: 80, top: 155 }}>
        Organiza las actividades de tu familia
      </span>

      {/* Próxima alarma */}
      <div
        className="af-prox-card"
        style={{
          position: 'absolute',
          left: 80,
          top: 225,
          width: 760,
          height: 220,
          background: 'var(--af-surface)',
          border: '1px solid var(--af-prox-border)',
          borderRadius: 'var(--af-r-card)',
          padding: '28px 35px 0',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/alarmas')}
      >
        <span
          style={{
            color: 'var(--af-primary)',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.14em',
          }}
        >
          PRÓXIMA ALARMA
        </span>
        <div
          style={{
            marginTop: 13,
            color: 'var(--af-texto)',
            fontWeight: 800,
            fontSize: 25,
            lineHeight: 1.2,
          }}
        >
          {next.title}
        </div>
        <div style={{ marginTop: 10, color: 'var(--af-muted)', fontSize: 15 }}>
          Hoy · 3:00 p. m. · Hospital Central
        </div>
      </div>

      {/* Acciones rápidas */}
      <div
        className="af-card"
        style={{ position: 'absolute', left: 875, top: 225, width: 485, height: 220, padding: '28px 35px 0' }}
      >
        <span style={{ color: 'var(--af-muted)', fontWeight: 700, fontSize: 12, letterSpacing: '0.14em' }}>
          ACCIONES RÁPIDAS
        </span>
        <div style={{ display: 'flex', gap: 35, marginTop: 20 }}>
          <SecondaryButton style={{ width: 190 }}>SOS</SecondaryButton>
          <SecondaryButton style={{ width: 190 }}>Ubicación</SecondaryButton>
        </div>
      </div>

      {/* Alarmas familiares */}
      <span className="t-title" style={{ position: 'absolute', left: 80, top: 487, fontSize: 22, fontWeight: 800 }}>
        Alarmas familiares
      </span>

      {ALARMS.map((alarm, i) => (
        <div
          key={alarm.id}
          className="af-card af-alarm-sm-card"
          style={{ position: 'absolute', left: SM_CARD_X[i], top: 550, padding: '26px 25px 0', cursor: 'pointer' }}
          onClick={() => navigate('/alarmas')}
        >
          <div className="t-card-title" style={{ fontSize: 18 }}>
            {alarm.short || alarm.title}
          </div>
          <div className="t-muted" style={{ fontSize: 14, marginTop: 10 }}>
            {alarm.when} · {alarm.time}
          </div>
        </div>
      ))}

      <PrimaryButton
        onClick={() => navigate('/crear')}
        style={{ position: 'absolute', left: 80, top: 760, width: 280 }}
      >
        + Programar alarma
      </PrimaryButton>
    </div>
  )
}