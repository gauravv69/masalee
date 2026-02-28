import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  icon?: ReactNode
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className = '',
  icon,
  loading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:bg-slate-700 ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
      ) : (
        icon
      )}
      <span>{children}</span>
    </button>
  )
}

export default Button

