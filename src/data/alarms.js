export const EVENT_TYPES = [
  { id: 'medica', icon: 'medical', label: 'Cita médica' },
  { id: 'escolar', icon: 'school', label: 'Reunión escolar' },
  { id: 'horario', icon: 'schedule', label: 'Horario escolar' },
  { id: 'legal', icon: 'legal', label: 'Reunión legal' },
  { id: 'familiar', icon: 'family', label: 'Evento familiar' },
  { id: 'otro', icon: 'other', label: 'Otro evento' },
]

export const WEEK_DAYS = [
  { id: 'L', label: 'L' },
  { id: 'Ma', label: 'M' },
  { id: 'Mi', label: 'M' },
  { id: 'J', label: 'J' },
  { id: 'V', label: 'V' },
  { id: 'S', label: 'S' },
]

export const ALARMS = [
  {
    id: 1,
    title: 'Cita médica de Samuel',
    short: 'Cita médica',
    when: 'Hoy',
    time: '3:00 p. m.',
    place: 'Hospital Central',
    isNext: true,
  },
  {
    id: 2,
    title: 'Reunión escolar',
    when: 'Mañana',
    time: '8:00 a. m.',
    place: 'Colegio',
  },
  {
    id: 3,
    title: 'Reunión legal',
    when: 'Viernes',
    time: '10:00 a. m.',
    place: 'Juzgado',
  },
]

export const INITIAL_ALARM = {
  type: 'medica',
  name: 'Cita médica de Samuel',
  date: '08 / 09 / 2026',
  time: '3:00 p. m.',
  repeat: ['Ma'],
  advance: '30 minutos antes',
  share: 'Mamá, Papá',
  place: 'Hospital Central',
  address: 'Av. Principal # 10-20',
  notes: 'Llevar documentos médicos',
}