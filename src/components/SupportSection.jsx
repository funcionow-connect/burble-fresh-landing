function SupportSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-lime-300 ring-1 ring-white/10">
          <span className="h-2 w-2 rounded-full bg-lime-300" />
          Atendimento
        </div>

        <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
          Ainda tem alguma dúvida?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/70 md:text-base">
          Fale com a equipe da Burble Fresh pelo WhatsApp e tire suas dúvidas
          antes de comprar.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-lime-300 px-8 py-4 text-xs font-black uppercase text-zinc-950 shadow-xl shadow-lime-300/20 transition hover:scale-105 hover:bg-lime-200"
        >
          Falar com a equipe
        </a>

        <p className="mt-4 text-xs font-bold text-white/40">
          Depois trocamos este link pelo WhatsApp oficial do cliente.
        </p>
      </div>
    </section>
  )
}

export default SupportSection