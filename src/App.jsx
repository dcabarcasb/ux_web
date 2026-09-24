import { Routes, Route, Navigate } from 'react-router-dom'
import { AlarmProvider } from './context/AlarmProvider'
import Login from './pages/Login'
import Inicio from './pages/Inicio'
import Alarmas from './pages/Alarmas'
import CrearAlarma from './pages/CrearAlarma'
import FechaHora from './pages/FechaHora'
import Lugar from './pages/Lugar'
import Confirmacion from './pages/Confirmacion'

export default function App() {
  return (
    <AlarmProvider>
      <div className="stage">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/alarmas" element={<Alarmas />} />
          <Route path="/crear" element={<CrearAlarma />} />
          <Route path="/crear/fecha-hora" element={<FechaHora />} />
          <Route path="/crear/lugar" element={<Lugar />} />
          <Route path="/crear/confirmacion" element={<Confirmacion />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AlarmProvider>
  )
}