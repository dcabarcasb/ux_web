const base = ({ size = 20, ...props }) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  ...props,
})

export function HomeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.8V21h14V9.8" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  )
}

export function BellIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6.5 2 6.5H4S6 14 6 9Z" />
      <path d="M10.3 20a2 2 0 0 0 3.4 0" />
    </svg>
  )
}

export function MapIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 19.5c.8-3.2 3.3-4.8 6.5-4.8s5.7 1.6 6.5 4.8" />
      <path d="M15.5 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17.6 15.1c1.9.8 3.2 2.2 3.9 4.4" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.5c1-4 4-6 7.5-6s6.5 2 7.5 6" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M4 10h16" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}