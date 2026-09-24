import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton } from '../components/Buttons'
import { ALARMS } from '../data/alarms'

const CARD_X = [80, 500, 920]

export default function Alarmas() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('proximas')
  const list = tab === 'proximas' ? ALARMS : ALARMS.slice(1)

  return (
    <div className="screen">
      <Navbar active="alarmas" />

      <span className="t-title" style={{ position: 'absolute', left: 80, top: 106 }}>
        Alarmas familiares
      </span>
      <span className="t-subtitle" style={{ position: 'absolute', left: 80, top: 155 }}>
        Eventos y recordatorios compartidos
      </span>

      {/* Tabs */}
      <button
        type="button"
        className={`af-tab${tab === 'proximas' ? ' is-active' : ''}`}
        style={{ left: 80 }}
        onClick={() => setTab('proximas')}
      >
        PRÓXIMAS
      </button>
      <button
        type="button"
        className={`af-tab${tab === 'historial' ? ' is-active' : ''}`}
        style={{ left: 190 }}
        onClick={() => setTab('historial')}
      >
        HISTORIAL
      </button>

      <PrimaryButton
        onClick={() => navigate('/crear')}
        style={{ position: 'absolute', left: 1080, top: 200, width: 280 }}
      >
        + Programar alarma
      </PrimaryButton>

      {list.map((alarm, i) => (
        <div
          key={alarm.id}
          className="af-card af-alarm-card"
          style={{ position: 'absolute', left: CARD_X[i], top: 300, padding: '33px 30px 0' }}
        >
          <div className="t-card-title" style={{ fontSize: 20 }}>
            {alarm.title}
          </div>
          <div className="t-muted" style={{ fontSize: 14, marginTop: 12 }}>
            {alarm.when} · {alarm.time} · {alarm.place}
          </div>
        </div>
      ))}
    </div>
  )
}