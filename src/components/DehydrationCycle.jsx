const cycleSteps = [
  {
    number: '1',
    title: 'Perda de suor e energia',
    text: 'Durante o exercício, seu corpo perde nutrientes e vitaminas essenciais pelo suor.',
  },
  {
    number: '2',
    title: 'Falta de eletrólitos',
    text: 'Sem esses nutrientes, seu corpo não consegue manter o mesmo ritmo e performance.',
  },
  {
    number: '3',
    title: 'Sinais de desidratação',
    text: 'Câibras, pernas pesadas, dor de cabeça, tontura e fadiga começam a aparecer.',
  },
  {
    number: '4',
    title: 'Queda de desempenho',
    text: 'A desidratação afeta concentração, humor e disposição para o restante do dia.',
  },
  {
    number: '5',
    title: 'Recuperação mais lenta',
    text: 'Sem reposição adequada, o corpo demora mais para recuperar e a fadiga acumula.',
  },
]

function DehydrationCycle() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            O ciclo da desidratação
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Quando você treina, o seu corpo perde no suor nutrientes e vitaminas
            essenciais que causam a{' '}
            <span className="text-violet-600">desidratação.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            A perda de apenas 2% a 3% de nutrientes e vitaminas essenciais já é
            suficiente para impactar negativamente seu desempenho físico e
            cognitivo.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-zinc-950 shadow-2xl md:h-80 md:w-80">
              <div className="absolute inset-4 rounded-full border-4 border-violet-400" />
              <div className="absolute inset-8 rounded-full border border-white/20" />

              <div className="z-10 flex h-28 w-28 items-center justify-center rounded-3xl bg-white text-center shadow-xl">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-lime-500">
                    Ciclo da
                  </div>
                  <div className="text-2xl font-black uppercase leading-none text-violet-600">
                    Desi
                    <br />
                    drata
                    <br />
                    ção
                  </div>
                </div>
              </div>

              <div className="absolute left-8 top-12 text-3xl text-lime-300">🏃</div>
              <div className="absolute right-10 top-20 text-3xl text-lime-300">⚡</div>
              <div className="absolute bottom-14 right-14 text-3xl text-lime-300">🚶</div>
              <div className="absolute bottom-16 left-12 text-3xl text-lime-300">💧</div>
              <div className="absolute left-1/2 top-7 -translate-x-1/2 text-3xl text-lime-300">⌚</div>
            </div>
          </div>

          <div className="space-y-4">
            {cycleSteps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[56px_1fr] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-violet-200"
              >
                <div className="flex items-center justify-center bg-zinc-950 text-2xl font-black text-lime-300">
                  {step.number}
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-black uppercase text-lime-500">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-zinc-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-lime-300 bg-lime-50 px-6 py-5">
          <p className="text-sm font-bold leading-relaxed text-zinc-800">
            Você treina. Sua energia esgota. O corpo sente. A mente também perde
            o ritmo, o ciclo se repete: você quebra no treino e continua na
            rotina, a recuperação fica cada vez mais lenta e a fadiga vai
            acumulando.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DehydrationCycle