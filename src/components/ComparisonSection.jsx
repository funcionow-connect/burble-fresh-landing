const seals = [
  'Zero açúcar',
  'Sem calorias',
  'Sem conservantes',
  'Eletrólitos',
  'Vitaminas',
  'Fórmula limpa',
]

const comparisonRows = [
  {
    item: 'Zero açúcar',
    burble: true,
    isotonic: false,
  },
  {
    item: 'Zero calorias',
    burble: true,
    isotonic: false,
  },
  {
    item: 'Reposição de eletrólitos',
    burble: true,
    isotonic: true,
  },
  {
    item: 'Vitaminas do complexo B',
    burble: true,
    isotonic: false,
  },
  {
    item: 'Prático para levar na bolsa',
    burble: true,
    isotonic: false,
  },
  {
    item: 'Sem corantes artificiais',
    burble: true,
    isotonic: false,
  },
]

function StatusIcon({ active }) {
  return (
    <span
      className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-black ${
        active ? 'bg-lime-300 text-zinc-950' : 'bg-red-100 text-red-600'
      }`}
    >
      {active ? '✓' : '×'}
    </span>
  )
}

function ComparisonSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {seals.map((seal) => (
            <div
              key={seal}
              className="rounded-full bg-zinc-100 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-500 ring-1 ring-zinc-200"
            >
              {seal}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Comparativo
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Burble Fresh x isotônicos tradicionais
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Uma fórmula funcional, prática e sem açúcar para quem quer hidratar,
            repor nutrientes e manter a rotina ativa.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#f7f7f8] p-6 shadow-sm ring-1 ring-zinc-200">
            <div className="flex min-h-[420px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-violet-100 via-white to-lime-100 p-8">
              <div className="flex h-72 w-48 rotate-[-5deg] items-center justify-center rounded-[2rem] bg-white shadow-2xl ring-1 ring-zinc-200">
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
            </div>

            <div className="mt-5 rounded-2xl bg-zinc-950 px-5 py-4 text-center text-white">
              <div className="text-xs font-black uppercase text-lime-300">
                Fórmula inteligente
              </div>
              <div className="mt-1 text-lg font-black">
                feita para performance real
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-zinc-200">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] bg-zinc-950 text-white">
              <div className="p-4 text-xs font-black uppercase tracking-wide">
                Benefício
              </div>
              <div className="p-4 text-center text-xs font-black uppercase tracking-wide text-lime-300">
                Burble
              </div>
              <div className="p-4 text-center text-xs font-black uppercase tracking-wide">
                Isotônico
              </div>
            </div>

            {comparisonRows.map((row, index) => (
              <div
                key={row.item}
                className={`grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center ${
                  index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
                }`}
              >
                <div className="p-4 text-sm font-bold text-zinc-800">
                  {row.item}
                </div>
                <div className="p-4 text-center">
                  <StatusIcon active={row.burble} />
                </div>
                <div className="p-4 text-center">
                  <StatusIcon active={row.isotonic} />
                </div>
              </div>
            ))}

            <div className="border-t border-zinc-200 bg-lime-50 p-5">
              <p className="text-sm font-bold leading-relaxed text-zinc-800">
                Mais leve, prático e alinhado com quem busca hidratação funcional
                sem adicionar açúcar à rotina.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-[#f7f7f8] p-6 ring-1 ring-zinc-200">
            <h3 className="text-lg font-black text-zinc-950">Praticidade</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
              Leve na bolsa, mochila ou nécessaire. Misture na água quando precisar.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f7f8] p-6 ring-1 ring-zinc-200">
            <h3 className="text-lg font-black text-zinc-950">Sabor leve</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
              Refrescante e fácil de consumir antes, durante ou depois do treino.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f7f8] p-6 ring-1 ring-zinc-200">
            <h3 className="text-lg font-black text-zinc-950">Rotina ativa</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
              Pensado para quem quer continuar performando depois do treino.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection