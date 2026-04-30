function SupportSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-violet-700 to-zinc-950 px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-[680px] text-center">
        <div className="mb-3 flex justify-center sm:mb-4">
          <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-lime-300">
            ⋮
          </span>
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-lime-300 sm:px-4 sm:text-[0.75rem]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
          Atendimento
        </div>

        <h2 className="text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl">
          Ainda ficou com alguma dúvida?
        </h2>

        <p className="mx-auto mt-4 max-w-[520px] text-[0.9rem] font-medium leading-[1.7] text-white/75 sm:text-[1.05rem]">
          Fale com a equipe da Burble Fresh pelo WhatsApp e tire suas dúvidas
          antes de comprar.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-[0.85rem] font-extrabold uppercase text-zinc-900 shadow-[0_4px_20px_rgba(199,255,5,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-[0_8px_28px_rgba(199,255,5,0.45)] sm:text-[0.95rem]"
        >
          Falar com a equipe
          <span>→</span>
        </a>

        <p className="mt-4 text-[0.72rem] font-bold text-white/40">
          Link temporário. Depois trocamos pelo WhatsApp oficial.
        </p>
      </div>
    </section>
  )
}

export default SupportSection