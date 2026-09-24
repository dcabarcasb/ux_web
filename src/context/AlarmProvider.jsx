import { useState } from 'react'
import { AlarmContext } from './AlarmContext'
import { INITIAL_ALARM } from '../data/alarms'

export function AlarmProvider({ children }) {
  const [alarm, setAlarm] = useState({ ...INITIAL_ALARM })

  const update = (patch) => setAlarm((prev) => ({ ...prev, ...patch }))
  const reset = () => setAlarm({ ...INITIAL_ALARM })

  return (
    <AlarmContext.Provider value={{ alarm, update, reset }}>
      {children}
    </AlarmContext.Provider>
  )
}