function Footer() {
  return (
    <footer className="bg-[#09090b] px-5 py-8 text-white sm:px-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" aria-label="Burble Fresh - Início" className="flex items-center no-underline">
          <img
            src="https://shop.burblefresh.com.br/assets/logo-burble-BbjddVNq.webp"
            alt="Burble Fresh"
            width="364"
            height="415"
            loading="lazy"
            decoding="async"
            className="h-12 w-auto"
          />
        </a>

        <div className="text-xs font-medium leading-relaxed text-white/40 sm:text-right">
          <p>Burble Fresh</p>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>© 2026 Burble Fresh. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer