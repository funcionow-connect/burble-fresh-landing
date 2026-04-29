import { useState } from 'react'

const nutrients = [
  {
    name: 'Magnésio',
    tag: 'Recuperação muscular',
    title: 'Ajuda a reduzir fadiga e apoiar a função muscular.',
    text: 'Mineral importante para contração muscular, produção de energia e recuperação após treinos intensos.',
    source: 'Presente em alimentos como abacate, castanhas e sementes.',
  },
  {
    name: 'Potássio',
    tag: 'Equilíbrio hídrico',
    title: 'Contribui para hidratação e funcionamento muscular.',
    text: 'Auxilia no equilíbrio de fluidos do corpo, especialmente depois da perda de suor durante o exercício.',
    source: 'Presente em alimentos como banana, água de coco e batata.',
  },
  {
    name: 'Sódio',
    tag: 'Reposição de eletrólitos',
    title: 'Essencial para repor sais perdidos no suor.',
    text: 'Durante o treino, o corpo perde sódio. A reposição adequada ajuda a manter ritmo, disposição e hidratação.',
    source: 'Importante em estratégias de hidratação esportiva.',
  },
  {
    name: 'Vitaminas B',
    tag: 'Energia e metabolismo',
    title: 'Apoiam o metabolismo energético do corpo.',
    text: 'Vitaminas do complexo B participam de processos ligados à energia, disposição e funcionamento do organismo.',
    source: 'Encontradas em cereais, ovos, carnes, legumes e verduras.',
  },
]

function ScienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = nutrients[activeIndex]

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? nutrients.length - 1 : current - 1,
    )
  }

  function next() {
    setActiveIndex((current) =>
      current === nutrients.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section className="bg-[#f7f7f8] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              Ciência da fórmula
            </div>

            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-zinc-950 md:text-4xl">
              A reposição certa para o corpo continuar performando.
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={previous}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black text-zinc-950 shadow-sm ring-1 ring-zinc-200 transition hover:scale-105"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-xl font-black text-lime-300 shadow-sm transition hover:scale-105"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <div className="flex min-h-[360px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-lime-200 via-lime-100 to-violet-100 p-8 text-center">
              <div>
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white text-5xl shadow-xl">
                  🥑
                </div>

                <div className="rounded-full bg-zinc-950 px-5 py-2 text-xs font-black uppercase text-lime-300">
                  imagem temporária
                </div>

                <p className="mt-4 max-w-xs text-sm font-semibold text-zinc-600">
                  Depois substituímos por fotos reais de ingredientes, produto
                  ou artes da marca.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-zinc-200 md:p-9">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-wide text-lime-500">
                  {active.tag}
                </div>

                <h3 className="mt-2 text-3xl font-black text-violet-700">
                  {active.name}
                </h3>
              </div>

              <div className="rounded-full bg-violet-100 px-4 py-2 text-xs font-black text-violet-700">
                {activeIndex + 1}/{nutrients.length}
              </div>
            </div>

            <h4 className="text-xl font-black leading-tight text-zinc-950 md:text-2xl">
              {active.title}
            </h4>

            <p className="mt-5 text-sm font-medium leading-relaxed text-zinc-600 md:text-base">
              {active.text}
            </p>

            <div className="mt-8 rounded-2xl bg-[#f7f7f8] p-5">
              <p className="text-sm font-bold leading-relaxed text-zinc-700">
                {active.source}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {nutrients.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-xs font-black transition ${
                    activeIndex === index
                      ? 'bg-lime-300 text-zinc-950'
                      : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScienceCarousel