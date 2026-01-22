export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border bg-white p-6 shadow ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export function CardContent({ children }) {
  return <div>{children}</div>
}
