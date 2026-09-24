import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton } from '../components/Buttons'
import { WEEK_DAYS } from '../data/alarms'
import { useAlarm } from '../context/useAlarm'

export default function FechaHora() {
  const navigate = useNavigate()
  const { alarm, update } = useAlarm()

  const toggleDay = (id) => {
    const on = alarm.repeat.includes(id)
    update({ repeat: on ? alarm.repeat.filter((d) => d !== id) : [...alarm.repeat, id] })
  }

  return (
    <div className="screen">
      <Navbar active="alarmas" />

      <span className="t-title" style={{ position: 'absolute', left: 80, top: 107 }}>
        Fecha y hora
      </span>
      <span className="t-subtitle" style={{ position: 'absolute', left: 80, top: 155 }}>
        Configura cuándo recibir la alarma
      </span>

      {/* Fecha */}
      <div style={{ position: 'absolute', left: 80, top: 237, width: 420 }}>
        <label className="af-label" htmlFor="af-date">
          Fecha
        </label>
        <input
          id="af-date"
          className="af-input"
          value={alarm.date}
          onChange={(e) => update({ date: e.target.value })}
        />
      </div>

      {/* Hora */}
      <div style={{ position: 'absolute', left: 540, top: 237, width: 420 }}>
        <label className="af-label" htmlFor="af-time">
          Hora
        </label>
        <input
          id="af-time"
          className="af-input"
          value={alarm.time}
          onChange={(e) => update({ time: e.target.value })}
        />
      </div>

      {/* Repetir */}
      <span className="t-label" style={{ position: 'absolute', left: 80, top: 374, fontSize: 15 }}>
        Repetir
      </span>
      <div style={{ position: 'absolute', left: 80, top: 412, display: 'flex', gap: 2 }}>
        {WEEK_DAYS.map((day, i) => (
          <button
            key={i}
            type="button"
            className={`af-day-chip${alarm.repeat.includes(day.id) ? ' is-selected' : ''}`}
            style={{ width: 37, height: 37, fontSize: 16 }}
            onClick={() => toggleDay(day.id)}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* Avisar con anticipación */}
      <div style={{ position: 'absolute', left: 80, top: 530, width: 420 }}>
        <label className="af-label" htmlFor="af-advance">
          Avisar con anticipación
        </label>
        <input
          id="af-advance"
          className="af-input"
          value={alarm.advance}
          onChange={(e) => update({ advance: e.target.value })}
        />
      </div>

      {/* Compartir con */}
      <div style={{ position: 'absolute', left: 540, top: 530, width: 420 }}>
        <label className="af-label" htmlFor="af-share">
          Compartir con
        </label>
        <input
          id="af-share"
          className="af-input"
          value={alarm.share}
          onChange={(e) => update({ share: e.target.value })}
        />
      </div>

      <PrimaryButton
        onClick={() => navigate('/crear/lugar')}
        style={{ position: 'absolute', left: 1080, top: 780, width: 280 }}
      >
        Continuar
      </PrimaryButton>
    </div>
  )
}