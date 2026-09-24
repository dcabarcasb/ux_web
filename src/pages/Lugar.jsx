import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { PrimaryButton } from '../components/Buttons'
import { MapPinIcon } from '../components/Icons'
import { useAlarm } from '../context/useAlarm'

export default function Lugar() {
  const navigate = useNavigate()
  const { alarm, update } = useAlarm()

  return (
    <div className="screen">
      <Navbar active="mapa" />

      <span className="t-title" style={{ position: 'absolute', left: 80, top: 107 }}>
        Lugar y detalles
      </span>
      <span className="t-subtitle" style={{ position: 'absolute', left: 80, top: 155 }}>
        Agrega la ubicación relacionada con el evento
      </span>

      {/* Lugar */}
      <div style={{ position: 'absolute', left: 80, top: 237, width: 480 }}>
        <label className="af-label" htmlFor="af-place">
          Lugar
        </label>
        <input
          id="af-place"
          className="af-input"
          value={alarm.place}
          onChange={(e) => update({ place: e.target.value })}
        />
      </div>

      {/* Dirección */}
      <div style={{ position: 'absolute', left: 80, top: 352, width: 480 }}>
        <label className="af-label" htmlFor="af-address">
          Dirección
        </label>
        <input
          id="af-address"
          className="af-input"
          value={alarm.address}
          onChange={(e) => update({ address: e.target.value })}
        />
      </div>

      {/* Notas */}
      <div style={{ position: 'absolute', left: 80, top: 467, width: 480 }}>
        <label className="af-label" htmlFor="af-notes">
          Notas
        </label>
        <input
          id="af-notes"
          className="af-input"
          value={alarm.notes}
          onChange={(e) => update({ notes: e.target.value })}
        />
      </div>

      {/* Mapa */}
      <div className="af-map">
        <span
          style={{
            position: 'absolute',
            left: 319,
            top: 175,
            color: 'var(--af-map-text)',
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: '0.1em',
          }}
        >
          MAPA
        </span>
        <div
          style={{
            position: 'absolute',
            left: 355,
            top: 250,
            width: 30,
            height: 30,
            color: 'var(--af-sos)',
          }}
        >
          <MapPinIcon size={30} />
        </div>
        <span
          style={{
            position: 'absolute',
            left: 307,
            top: 293,
            color: 'var(--af-marca)',
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          Hospital Central
        </span>
      </div>

      <PrimaryButton
        onClick={() => navigate('/crear/confirmacion')}
        style={{ position: 'absolute', left: 1080, top: 780, width: 280 }}
      >
        Continuar
      </PrimaryButton>
    </div>
  )
}