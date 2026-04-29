const activationBenefits = [
  'Dissolve fácil',
  'Mistura completa e uniforme',
  'Rápida absorção',
]

function ActivationSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-[#f7f7f8] p-6 shadow-sm ring-1 ring-zinc-200 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Bolhas de ativação
              </div>

              <h2 className="text-2xl font-black tracking-tight text-zinc-950 md:text-4xl">
                Ativação rápida na água
              </h2>
            </div>

            <div className="hidden rounded-full border border-lime-300 px-4 py-2 text-xs font-black uppercase text-lime-600 md:block">
              Rápida absorção
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-sky-300">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-cyan-300 to-blue-500" />

              <div className="absolute left-[10%] top-[20%] h-10 w-10 rounded-full border-4 border-white/70 bg-white/20" />
              <div className="absolute left-[35%] top-[45%] h-6 w-6 rounded-full border-4 border-white/60 bg-white/20" />
              <div className="absolute right-[18%] top-[30%] h-14 w-14 rounded-full border-4 border-white/70 bg-white/20" />
              <div className="absolute right-[34%] bottom-[18%] h-8 w-8 rounded-full border-4 border-white/60 bg-white/20" />

              <div className="absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white_0_2px,transparent_3px),radial-gradient(circle_at_70%_50%,white_0_2px,transparent_3px),radial-gradient(circle_at_40%_80%,white_0_1px,transparent_2px)] bg-[length:28px_28px]" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {activationBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-zinc-200"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-zinc-950">
                    ✓
                  </div>

                  <span className="text-sm font-black text-zinc-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
              <p className="text-sm font-bold leading-relaxed text-zinc-800">
                O corpo absorve os nutrientes com agilidade, potencializando os
                efeitos da fórmula desde a primeira dose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivationSection