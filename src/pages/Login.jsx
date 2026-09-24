import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../components/Buttons'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('correo@ejemplo.com')
  const [password, setPassword] = useState('••••••••')

  return (
    <div className="screen" style={{ background: 'var(--af-fondo)' }}>
      {/* Left brand panel */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 700,
          height: 1024,
          background: 'var(--af-marca)',
        }}
      >
        <span className="af-login-brand">ALARMA FAMILIAR</span>
        <h1
          style={{
            position: 'absolute',
            left: 90,
            top: 270,
            margin: 0,
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 44,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          Tu familia,
          <br />
          organizada y conectada.
        </h1>
      </div>

      {/* Right form area */}
      <span
        style={{
          position: 'absolute',
          left: 835,
          top: 212,
          fontWeight: 800,
          fontSize: 32,
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          color: 'var(--af-texto)',
        }}
      >
        Iniciar sesión
      </span>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/inicio')
        }}
      >
        {/* Correo */}
        <div style={{ position: 'absolute', left: 835, top: 302, width: 450 }}>
          <label className="af-label" htmlFor="af-email">
            Correo electrónico
          </label>
          <input
            id="af-email"
            className="af-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contraseña */}
        <div style={{ position: 'absolute', left: 835, top: 410, width: 450 }}>
          <label className="af-label" htmlFor="af-pass">
            Contraseña
          </label>
          <input
            id="af-pass"
            className="af-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <PrimaryButton
          type="submit"
          onClick={() => navigate('/inicio')}
          style={{ position: 'absolute', left: 835, top: 535, width: 450 }}
        >
          Ingresar
        </PrimaryButton>
      </form>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{
          position: 'absolute',
          left: 970,
          top: 612,
          color: 'var(--af-primary)',
          fontWeight: 600,
          fontSize: 14,
          textDecoration: 'none',
        }}
      >
        ¿Olvidaste tu contraseña?
      </a>

      <span
        style={{
          position: 'absolute',
          left: 983,
          top: 671,
          color: 'var(--af-muted)',
          fontSize: 14,
        }}
      >
        ¿No tienes una cuenta?
      </span>

      <SecondaryButton
        onClick={() => navigate('/crear')}
        style={{ position: 'absolute', left: 835, top: 710, width: 450 }}
      >
        Registrarme
      </SecondaryButton>
    </div>
  )
}