const steps = [
  {
    number: '1',
    title: 'Adicione',
    text: 'Coloque uma cápsula ou dose na sua garrafa com água.',
  },
  {
    number: '2',
    title: 'Ative',
    text: 'Aguarde a efervescência dissolver e misture até ficar uniforme.',
  },
  {
    number: '3',
    title: 'Hidrate-se',
    text: 'Consuma antes, durante ou depois do treino para apoiar sua rotina.',
  },
]

const moments = [
  {
    title: 'Antes do treino',
    text: 'Para começar com mais disposição e preparar o corpo.',
  },
  {
    title: 'Durante o treino',
    text: 'Para ajudar na hidratação e reposição de eletrólitos.',
  },
  {
    title: 'Depois do treino',
    text: 'Para apoiar recuperação e reduzir a sensação de fadiga.',
  },
]

function HowToUseSection() {
  return (
    <section className="bg-[#f7f7f8] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Como usar
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Simples, rápido e fácil de incluir na sua rotina.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Prepare em poucos segundos e use nos momentos em que seu corpo mais
            precisa de hidratação funcional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="overflow-hidden rounded-[1.7rem] bg-white p-4 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="relative flex h-64 items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-violet-100 via-white to-lime-100">
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 text-xl font-black text-lime-300 shadow-lg">
                  {step.number}
                </div>

                <div className="text-center">
                  <div className="text-6xl font-black text-violet-700">
                    {step.number}
                  </div>
                  <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    imagem temporária
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-black text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {moments.map((moment) => (
            <div
              key={moment.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-zinc-950">
                ✓
              </div>

              <h3 className="text-lg font-black text-zinc-950">
                {moment.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                {moment.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#oferta"
            className="inline-flex rounded-full bg-lime-300 px-8 py-4 text-xs font-black uppercase text-zinc-950 shadow-lg transition hover:scale-105 hover:bg-lime-200"
          >
            Quero experimentar agora
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowToUseSection