import { useState } from 'react'

const ingredients = [
  {
    name: 'Sódio + Potássio',
    image: 'https://shop.burblefresh.com.br/assets/sodio-potassio-BenJRXvo.webp',
    text: 'O sódio ajuda a preservar a hidratação e o volume de líquidos, enquanto o potássio atua na contração muscular, nos reflexos e na estabilidade dos músculos. Reduzindo cãibras, queda de rendimento e sensação de desgaste nos treinos, dias quentes ou rotinas intensas.',
  },
  {
    name: 'Magnésio',
    image: 'https://shop.burblefresh.com.br/assets/magnesio-E6K4Cjxh.webp',
    text: 'Contribui para a recuperação muscular e a qualidade do sono. Forma de alta absorção, sem efeito laxativo e sem desconforto gástrico.',
  },
  {
    name: 'Cálcio',
    image: 'https://shop.burblefresh.com.br/assets/calcio-DQPqH9cT.webp',
    text: 'Oferece suporte essencial para treinos de impacto, ajudando a proteger ossos e articulações. Fortalece músculos e previne microlesões.',
  },
  {
    name: 'Vitaminas B5 + B6',
    image: 'https://shop.burblefresh.com.br/assets/vitaminas-b5-b6-CQ_odU3g.webp',
    text: 'Melhoram a eficiência metabólica, ajudando a converter gordura em energia, reduzindo a fadiga acumulada. Favorece o foco, o humor e o transporte de oxigênio para os músculos, oferecendo mais estabilidade física e emocional.',
  },
  {
    name: 'Vitamina B12',
    image: 'https://shop.burblefresh.com.br/assets/vitamina-b12-C4D1s0Zf.webp',
    text: 'Contribui para a formação de glóbulos vermelhos e suporte a clareza mental. Também ajuda no metabolismo energético, promovendo mais disposição, resistência e estabilidade antes, durante e depois do treino.',
  },
  {
    name: 'Água de Coco Liofilizada',
    image: 'https://shop.burblefresh.com.br/assets/blend-natural-Dqcxn2aT.webp',
    text: 'Fonte natural de minerais, com alta pureza e sem adição de açúcares. Passa por desidratação a frio para preservar os nutrientes. Oferece sabor suave, digestão leve e suporte natural à reposição eletrolítica.',
  },
]

const seals = [
  'Zero Lactose',
  'Zero Glúten',
  'Produto Vegano',
  'Keto Friendly',
  'Zero Açúcar',
  'Sem Conservantes',
]

function ScienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = ingredients[activeIndex]

  function next() {
    setActiveIndex((current) =>
      current === ingredients.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section id="ciencia" className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-2 flex justify-center sm:mb-3">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-violet-600">
              ⋮
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#faf9fb] px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            Ciência da Fórmula
          </div>

          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            <span>Vitaminas, Cálcio e </span>
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              Sais Minerais do Complexo B
            </span>
          </h2>

          <p className="text-[0.9rem] leading-[1.7] text-zinc-600 sm:text-[1.05rem]">
            Quando a reposição acontece na proporção certa, com nutrição celular
            eficiente, o corpo responde melhor ao esforço. O equilíbrio hídrico
            e a reposição de vitaminas essenciais sustentam o funcionamento
            muscular e a produção de energia, combatendo a quebra entre treino e
            rotina.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-lg">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="rounded-3xl border border-zinc-100 bg-gradient-to-br from-[#faf9fb] to-white p-5 sm:p-6">
              <div className="mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-violet-100 shadow-[0_4px_16px_rgba(124,77,255,0.18)] sm:mb-4 sm:rounded-2xl">
                <img
                  src={active.image}
                  alt={active.name}
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative pl-3">
                <span className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-lime-300" />

                <h3 className="mb-1.5 text-[1rem] font-extrabold leading-tight text-zinc-900 sm:text-[1.1rem]">
                  {active.name}
                </h3>

                <p className="text-[0.82rem] leading-[1.55] text-zinc-600 sm:text-[0.88rem]">
                  {active.text}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Próximo ingrediente"
              className="absolute right-2 top-[28%] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-lg font-black text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 sm:right-3 sm:top-1/3 sm:h-10 sm:w-10"
            >
              ›
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {ingredients.map((ingredient, index) => (
              <button
                key={ingredient.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para ingrediente ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-6 bg-zinc-900'
                    : 'w-1.5 bg-zinc-300 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[320px] rounded-r-xl border-l-4 border-violet-600 bg-violet-100 px-3 py-2.5 sm:mt-12 sm:max-w-lg sm:px-4 sm:py-3">
          <p className="text-[0.85rem] font-semibold leading-[1.55] text-zinc-900 sm:text-[0.95rem]">
            <b>Hidratação Inteligente</b> para quem <b>exige mais</b> do corpo,
            sem comprometer a <b>saúde</b>.
          </p>
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-violet-700 underline decoration-lime-300 decoration-2 underline-offset-4 transition-colors hover:text-violet-900 sm:text-[0.95rem]"
          >
            Ver tabela nutricional
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden sm:mt-12">
        <div className="flex w-max animate-[marquee_22s_linear_infinite]">
          {[...seals, ...seals, ...seals].map((seal, index) => (
            <div
              key={`${seal}-${index}`}
              className={`flex items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-wide sm:px-8 sm:py-3.5 ${
                index % 2 === 0
                  ? 'bg-violet-50 text-violet-700'
                  : 'bg-violet-700 text-lime-300'
              }`}
            >
              {seal}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScienceCarousel