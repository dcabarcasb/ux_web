import { useNavigate } from 'react-router-dom'
import { HomeIcon, BellIcon, MapIcon, UsersIcon, UserIcon } from './Icons'

const NAV_ITEMS = [
  { key: 'inicio', to: '/inicio', label: 'Inicio', icon: HomeIcon, left: 680, labelOffset: 48 },
  { key: 'alarmas', to: '/alarmas', label: 'Alarmas', icon: BellIcon, left: 800, labelOffset: 38 },
  { key: 'mapa', to: '/inicio', label: 'Mapa', icon: MapIcon, left: 920, labelOffset: 48 },
  { key: 'familia', to: '/inicio', label: 'Familia', icon: UsersIcon, left: 1040, labelOffset: 44 },
  { key: 'perfil', to: '/inicio', label: 'Perfil', icon: UserIcon, left: 1160, labelOffset: 49 },
]

export default function Navbar({ active }) {
  const navigate = useNavigate()

  return (
    <nav className="af-navbar">
      <span className="af-nav-logo" onClick={() => navigate('/inicio')}>
        ALARMA FAMILIAR
      </span>
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon
        const isActive = item.key === active
        return (
          <div
            key={item.key}
            className={`af-nav-item${isActive ? ' is-active' : ''}`}
            style={{ left: item.left, gap: item.labelOffset - 32 }}
            onClick={() => navigate(item.to)}
          >
            <span className="af-nav-icon">
              <Icon size={20} />
            </span>
            <span className="af-nav-label">{item.label}</span>
          </div>
        )
      })}
    </nav>
  )
}