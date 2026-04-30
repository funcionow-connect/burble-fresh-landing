function Header() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.04] bg-white/90 shadow-[0_2px_24px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-shadow duration-300">
      <div className="relative mx-auto flex h-[60px] max-w-6xl items-center justify-center px-5 sm:h-[72px] sm:px-8">
        <a href="#top" aria-label="Burble Fresh - Início" className="flex items-center no-underline">
          <img
            src="https://shop.burblefresh.com.br/assets/logo-burble-BbjddVNq.webp"
            alt="Burble Fresh"
            width="364"
            height="415"
            decoding="async"
            fetchPriority="high"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <a
          href="#oferta"
          aria-label="COMPRAR AGORA"
          className="absolute right-5 hidden items-center gap-1.5 rounded-full bg-lime-300 px-4 py-2 text-[0.8rem] font-extrabold text-zinc-900 shadow-[0_4px_20px_rgba(199,255,5,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 md:inline-flex sm:right-8"
        >
          COMPRAR AGORA
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  )
}

export default Header