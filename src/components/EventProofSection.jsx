const stats = [
  {
    value: '1.598',
    label: 'corredoras aprovaram',
  },
  {
    value: '98%',
    label: 'amaram o sabor',
  },
  {
    value: '86%',
    label: 'melhoraram a recuperação',
  },
  {
    value: '84%',
    label: 'melhoraram desempenho físico',
  },
]

function EventProofSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Letz Run Girls
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight md:text-4xl">
            Burble Fresh em movimento com mulheres reais.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
            Uma experiência de hidratação funcional validada em uma comunidade
            ativa, conectada e focada em performance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          <div className="flex min-h-[260px] items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-violet-500 to-lime-300 p-6 md:col-span-2 md:row-span-2">
            <div className="text-center">
              <div className="text-7xl font-black text-white">01</div>
              <div className="mt-2 text-xs font-black uppercase tracking-widest text-zinc-950">
                foto principal temporária
              </div>
            </div>
          </div>

          <div className="flex min-h-[180px] items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-lime-200 to-violet-200 p-6">
            <div className="text-center">
              <div className="text-5xl font-black text-violet-700">02</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-zinc-700">
                foto
              </div>
            </div>
          </div>

          <div className="flex min-h-[180px] items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-violet-200 to-zinc-100 p-6">
            <div className="text-center">
              <div className="text-5xl font-black text-violet-700">03</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-zinc-700">
                foto
              </div>
            </div>
          </div>

          <div className="flex min-h-[180px] items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-zinc-100 to-lime-200 p-6">
            <div className="text-center">
              <div className="text-5xl font-black text-violet-700">04</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-zinc-700">
                foto
              </div>
            </div>
          </div>

          <div className="flex min-h-[180px] items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-violet-600 to-zinc-950 p-6">
            <div className="text-center">
              <div className="text-5xl font-black text-lime-300">05</div>
              <div className="mt-2 text-[10px] font-black uppercase tracking-widest text-white/70">
                foto
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-[#f7f7f8] p-6 text-center ring-1 ring-zinc-200"
            >
              <div className="text-3xl font-black text-violet-700">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-black uppercase leading-relaxed text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.7rem] bg-zinc-950 px-6 py-5 text-center text-white">
          <p className="text-sm font-bold leading-relaxed">
            Prova social visual para reforçar comunidade, movimento e validação
            real da marca.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventProofSection