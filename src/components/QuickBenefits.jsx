const benefits = [
  {
    title: 'Mais disposição e energia no treino.',
    icon: '↗',
  },
  {
    title: 'Recuperação rápida, sem quebrar no dia.',
    icon: '⚡',
  },
  {
    title: 'Sem pernas pesadas ou fadiga.',
    icon: '⌁',
  },
]

function QuickBenefits() {
  return (
    <section className="bg-[#f7f7f8] px-6 pb-24">
      <div className="mx-auto max-w-xl">
        <div className="space-y-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-zinc-200"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-300 text-lg font-black text-zinc-950">
                {benefit.icon}
              </div>

              <p className="text-sm font-black text-zinc-800">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#oferta"
            className="inline-flex rounded-full bg-lime-300 px-8 py-4 text-xs font-black uppercase text-zinc-950 shadow-lg transition hover:scale-105 hover:bg-lime-200"
          >
            Quero mais disposição e energia
          </a>
        </div>
      </div>
    </section>
  )
}

export default QuickBenefits