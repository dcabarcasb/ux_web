import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton } from '../components/Buttons'
import { EVENT_TYPES } from '../data/alarms'
import { useAlarm } from '../context/useAlarm'

const CHOICE_POS = [
  { left: 80, top: 265 },
  { left: 380, top: 265 },
  { left: 680, top: 265 },
  { left: 80, top: 370 },
  { left: 380, top: 370 },
  { left: 680, top: 370 },
]

const DEFAULT_NAME = {
  medica: 'Cita médica de Samuel',
  escolar: 'Reunión escolar',
  horario: 'Horario escolar',
  legal: 'Reunión legal',
  familiar: 'Evento familiar',
  otro: 'Otro evento',
}

export default function CrearAlarma() {
  const navigate = useNavigate()
  const { alarm, update } = useAlarm()

  const select = (id) => {
    update({ type: id, name: DEFAULT_NAME[id] })
  }

  return (
    <div className="screen">
      <Navbar active="alarmas" />

      <span className="t-title" style={{ position: 'absolute', left: 80, top: 107 }}>
        Crear alarma
      </span>
      <span className="t-subtitle" style={{ position: 'absolute', left: 80, top: 155 }}>
        Selecciona el tipo de evento
      </span>

      <span className="t-label" style={{ position: 'absolute', left: 80, top: 219, fontSize: 15 }}>
        Tipo de evento
      </span>

      {EVENT_TYPES.map((type, i) => (
        <div
          key={type.id}
          className={`af-choice${alarm.type === type.id ? ' is-selected' : ''}`}
          style={CHOICE_POS[i]}
          onClick={() => select(type.id)}
        >
          {type.label}
        </div>
      ))}

      <div style={{ position: 'absolute', left: 80, top: 507, width: 880 }}>
        <label className="af-label" htmlFor="af-name">
          Nombre del evento
        </label>
        <input
          id="af-name"
          className="af-input"
          value={alarm.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="Ej. Cita médica de Samuel"
        />
      </div>

      <PrimaryButton
        onClick={() => navigate('/crear/fecha-hora')}
        style={{ position: 'absolute', left: 1080, top: 760, width: 280 }}
      >
        Continuar
      </PrimaryButton>
    </div>
  )
}