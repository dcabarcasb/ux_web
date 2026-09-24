export function Field({ label, children, style, width = 420 }) {
  return (
    <div style={{ position: 'absolute', width, ...style }}>
      <label className="af-label">{label}</label>
      {children}
    </div>
  )
}