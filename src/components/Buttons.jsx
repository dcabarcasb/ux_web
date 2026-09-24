export function PrimaryButton({ children, style, onClick, className = '' }) {
  return (
    <button
      type="button"
      className={`btn-af btn-af-primary ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, style, onClick, className = '' }) {
  return (
    <button
      type="button"
      className={`btn-af btn-af-secondary ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}