const BrandMark = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-sky-500 to-emerald-400 text-sm font-bold text-white shadow-md shadow-brand-700/30">
        L
      </span>
      <span className="text-slate-200">Login Studio</span>
    </div>
  )
}

export default BrandMark

