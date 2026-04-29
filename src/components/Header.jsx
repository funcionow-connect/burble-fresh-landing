function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="w-28" />

        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-lg font-black text-white">
            b
          </div>
          <span className="sr-only">Burble Fresh</span>
        </a>

        <a
          href="#oferta"
          className="rounded-full bg-lime-300 px-5 py-2 text-xs font-black uppercase text-zinc-950 shadow-sm transition hover:scale-105 hover:bg-lime-200"
        >
          Comprar agora
        </a>
      </div>
    </header>
  )
}

export default Header