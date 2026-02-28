import type { InputHTMLAttributes, ReactNode } from 'react'

type InputFieldProps = {
  label: string
  rightSlot?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ({ label, rightSlot, className = '', ...props }: InputFieldProps) => {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-200">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <div className="relative">
        <input
          className={`w-full rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3 text-slate-50 placeholder:text-slate-500 shadow-inner focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition ${className}`}
          {...props}
        />
        {rightSlot ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
            {rightSlot}
          </span>
        ) : null}
      </div>
    </label>
  )
}

export default InputField

