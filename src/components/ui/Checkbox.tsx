import type { InputHTMLAttributes } from 'react'

type CheckboxProps = {
  label: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

const Checkbox = ({ label, className = '', ...props }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2 text-sm text-slate-200">
      <input
        type="checkbox"
        className={`h-4 w-4 rounded border-slate-700 bg-slate-900 text-brand-500 focus:ring-brand-500/40 ${className}`}
        {...props}
      />
      <span className="text-slate-300">{label}</span>
    </label>
  )
}

export default Checkbox

