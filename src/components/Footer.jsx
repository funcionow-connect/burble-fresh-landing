function Footer() {
  return (
    <footer className="bg-[#09090b] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-black text-lime-300">
              b
            </div>

            <div>
              <div className="text-sm font-black uppercase tracking-widest">
                Burble Fresh
              </div>
              <div className="text-xs font-bold text-white/40">
                Hidratação funcional inteligente
              </div>
            </div>
          </div>
        </div>

        <div className="text-left text-xs font-medium leading-relaxed text-white/40 md:text-right">
          <p>Funcionow Brands Ltda.</p>
          <p>CNPJ: 00.000.000/0000-00</p>
          <p>© 2026 Burble Fresh. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer