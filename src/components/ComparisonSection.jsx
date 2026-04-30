const comparisonRows = [
  {
    ingredient: 'Eletrólitos Totais',
    burble: '667 mg',
    other: '±600 mg',
    type: 'text',
  },
  {
    ingredient: 'Sódio',
    burble: true,
    other: true,
    type: 'check',
  },
  {
    ingredient: 'Potássio',
    burble: true,
    other: true,
    type: 'check',
  },
  {
    ingredient: 'Magnésio',
    burble: true,
    other: false,
    type: 'check',
  },
  {
    ingredient: 'Cálcio',
    burble: true,
    other: false,
    type: 'check',
  },
  {
    ingredient: 'Vitaminas B5, B6 e B12',
    burble: true,
    other: false,
    type: 'check',
  },
  {
    ingredient: 'Zero Açúcar',
    burble: true,
    other: false,
    type: 'check',
  },
  {
    ingredient: 'Sem Conservantes',
    burble: true,
    other: false,
    type: 'check',
  },
]

function CheckIcon({ active }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[0.75rem] font-black sm:h-7 sm:w-7 ${
        active ? 'bg-lime-300/25 text-lime-600' : 'bg-red-100 text-red-500'
      }`}
    >
      {active ? '✓' : '×'}
    </span>
  )
}

function ComparisonSection() {
  return (
    <section
      id="comparacao"
      className="relative overflow-hidden bg-[#faf9fb] px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <div className="mb-2 flex justify-center sm:mb-3">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-lime-300">
              ⋮
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 shadow-[0_1px_4px_rgba(0,0,0,0.04)] sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            Fórmula Superior
          </div>

          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              Burble Fresh
            </span>{' '}
            <span className="text-zinc-900">x</span>{' '}
            <span className="text-orange-500">Isotônicos</span>{' '}
            <span className="text-zinc-900">e Eletrólitos Comuns</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:rounded-3xl">
          <div className="relative bg-violet-100">
            <img
              src="https://shop.burblefresh.com.br/assets/burble-vs-isotonico-BHqPtaZE.webp"
              srcSet="https://shop.burblefresh.com.br/assets/burble-vs-isotonico-720-Cmh70MJQ.webp 720w, https://shop.burblefresh.com.br/assets/burble-vs-isotonico-BHqPtaZE.webp 1280w"
              sizes="(max-width: 640px) 100vw, 880px"
              alt="Burble Fresh ao lado de isotônico comum"
              width="1280"
              height="960"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white sm:h-14" />
          </div>

          <ul>
            <li className="grid grid-cols-[1.3fr_1fr_1fr] items-center border-t border-zinc-100 bg-[#faf9fb] sm:grid-cols-[1.4fr_1fr_1fr]">
              <div className="px-2 py-2.5 text-center text-[0.62rem] font-bold uppercase leading-tight tracking-wide text-zinc-500 sm:px-5 sm:py-3 sm:text-[0.72rem]">
                Ingredientes
              </div>

              <div className="border-l border-zinc-100 px-2 py-2.5 text-center text-[0.62rem] font-extrabold uppercase leading-[1.05] tracking-tight text-violet-800 sm:px-5 sm:py-3 sm:text-[0.75rem]">
                BURBLE
                <br />
                FRESH
              </div>

              <div className="border-l border-zinc-100 px-2 py-2.5 text-center text-[0.62rem] font-extrabold uppercase leading-tight tracking-tight text-red-500 sm:px-5 sm:py-3 sm:text-[0.75rem]">
                Outras Fórmulas
              </div>
            </li>

            {comparisonRows.map((row, index) => (
              <li
                key={row.ingredient}
                className={`grid grid-cols-[1.3fr_1fr_1fr] items-center border-t border-zinc-100 sm:grid-cols-[1.4fr_1fr_1fr] ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#faf9fb]/60'
                }`}
              >
                <div className="px-2 py-2 text-center text-[0.72rem] font-semibold leading-tight text-zinc-700 sm:px-5 sm:py-3 sm:text-[0.9rem]">
                  {row.ingredient}
                </div>

                <div className="flex items-center justify-center border-l border-zinc-100 px-2 py-2 text-center sm:px-5 sm:py-3">
                  {row.type === 'text' ? (
                    <span className="text-[0.72rem] font-extrabold leading-tight text-zinc-900 sm:text-[0.85rem]">
                      {row.burble}
                    </span>
                  ) : (
                    <CheckIcon active={row.burble} />
                  )}
                </div>

                <div className="flex items-center justify-center border-l border-zinc-100 px-2 py-2 text-center sm:px-5 sm:py-3">
                  {row.type === 'text' ? (
                    <span className="text-[0.72rem] font-extrabold leading-tight text-red-500 sm:text-[0.85rem]">
                      {row.other}
                    </span>
                  ) : (
                    <CheckIcon active={row.other} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 max-w-[760px] rounded-r-xl border-l-4 border-lime-300 bg-lime-50 p-3 sm:mt-10 sm:p-4">
          <p className="text-[0.85rem] font-semibold leading-[1.65] text-zinc-900 sm:text-[0.95rem]">
            A Burble Fresh combina reposição de eletrólitos, vitaminas e fórmula
            limpa para hidratar com mais eficiência, sem excesso de açúcar ou
            ingredientes desnecessários.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection