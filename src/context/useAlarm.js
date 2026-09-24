import { useContext } from 'react'
import { AlarmContext } from './AlarmContext'

export function useAlarm() {
  const ctx = useContext(AlarmContext)
  if (!ctx) throw new Error('useAlarm must be used within AlarmProvider')
  return ctx
}