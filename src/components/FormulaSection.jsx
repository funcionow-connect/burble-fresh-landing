const formulaCards = [
  {
    number: '01',
    title: 'Composição',
    text: 'Contém sódio, potássio, magnésio, cálcio e vitaminas do complexo B para auxiliar na reposição do que o corpo perde no suor.',
  },
  {
    number: '02',
    title: 'Fórmula limpa',
    text: 'Zero açúcar, zero calorias, sem conservantes e sem aditivos artificiais. Sabor leve e refrescante.',
  },
  {
    number: '03',
    title: 'Benefícios',
    text: 'Ajuda na recuperação, disposição, foco, hidratação e redução da sensação de fadiga depois do treino.',
  },
]

function FormulaSection() {
  return (
    <section className="bg-[#f7f7f8] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Hidratação inteligente
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Hidratação <span className="text-violet-600">inteligente</span> e funcional
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Burble Fresh é um suplemento para reposição de eletrólitos que combina sais minerais
            e vitaminas essenciais com ingredientes funcionais.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-zinc-200">
              <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-lime-50 to-violet-100">
                <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-lime-300/40 blur-2xl" />
                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-violet-400/30 blur-2xl" />

                <div className="relative flex items-end justify-center gap-5">
                  <div className="flex h-72 w-48 rotate-[-4deg] items-center justify-center rounded-[2rem] bg-white shadow-2xl ring-1 ring-zinc-200">
                    <div className="flex h-64 w-40 items-center justify-center rounded-[1.7rem] bg-violet-600">
                      <div className="text-center">
                        <div className="text-7xl font-black text-lime-300">b</div>
                        <div className="mt-3 text-base font-black uppercase tracking-widest text-white">
                          Burble
                        </div>
                        <div className="text-sm font-black uppercase tracking-widest text-white">
                          Fresh
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 hidden h-60 w-28 rotate-[6deg] items-center justify-center rounded-3xl bg-lime-300 shadow-2xl md:flex">
                    <span className="text-center text-sm font-black uppercase text-zinc-950">
                      stick
                      <br />
                      lemon
                      <br />
                      lime
                    </span>
                  </div>

                  <div className="mb-16 hidden h-44 w-24 rounded-full bg-lime-200 shadow-xl md:block" />
                </div>

                <div className="absolute bottom-6 right-6 rounded-2xl bg-violet-600 px-4 py-3 text-white shadow-lg">
                  <div className="text-[10px] font-black uppercase text-lime-300">
                    Zero
                  </div>
                  <div className="text-sm font-black">Açúcar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {formulaCards.map((card) => (
              <div
                key={card.number}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xs font-black text-violet-700">
                    {card.number}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-lime-300" />
                </div>

                <h3 className="text-lg font-black text-zinc-950">{card.title}</h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormulaSection