const audienceCards = [
  {
    title: 'Treino com mais ritmo',
    text: 'Para quem quer manter energia do início ao fim.',
  },
  {
    title: 'Rotina ativa',
    text: 'Para quem treina, trabalha e ainda precisa render no dia.',
  },
  {
    title: 'Recuperação melhor',
    text: 'Para quem sente fadiga, pernas pesadas ou queda de disposição.',
  },
]

function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white">
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-lime-300 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Feito para rotina ativa
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Para mulheres que treinam, trabalham e não querem perder o ritmo.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/70 md:text-base">
            A Burble Fresh ajuda a manter hidratação, disposição e recuperação
            em uma rotina intensa, sem açúcar e sem complicação.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audienceCards.map((card, index) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[1.7rem] bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="flex h-64 items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-violet-500 to-lime-300">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/90">
                    {index + 1}
                  </div>
                  <div className="mt-2 text-xs font-black uppercase tracking-widest text-zinc-950">
                    imagem temporária
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-black text-white">{card.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/65">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-[1.7rem] bg-white p-6 text-center text-zinc-950 shadow-2xl">
          <h3 className="text-xl font-black">
            Hidratação não deveria ser só água.
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
            Depois do suor, seu corpo precisa repor eletrólitos e nutrientes
            essenciais para continuar performando.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AudienceSection