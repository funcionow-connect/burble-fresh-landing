import { useState } from 'react'

const testimonials = [
  {
    title: 'Depoimento 1',
    poster:
      'https://shop.burblefresh.com.br/assets/prova-social-poster-1-CxKD684p.webp',
  },
  {
    title: 'Depoimento 2',
    poster:
      'https://shop.burblefresh.com.br/assets/prova-social-poster-2-CgSlMnZ3.webp',
  },
  {
    title: 'Depoimento 3',
    poster:
      'https://shop.burblefresh.com.br/assets/prova-social-poster-3_new-DoA0hBtD.webp',
  },
]

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  function previous() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  function next() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#faf9fb] px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <div className="mb-2 flex justify-center sm:mb-3">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-violet-600">
              ⋮
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 shadow-[0_1px_4px_rgba(0,0,0,0.04)] sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            Prova Social
          </div>

          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Mulheres reais usando{' '}
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              Burble Fresh
            </span>{' '}
            na rotina.
          </h2>

          <p className="mx-auto max-w-[560px] text-[0.9rem] leading-[1.7] text-zinc-600 sm:text-[1.05rem]">
            Relatos em vídeo ajudam a mostrar experiência real, sabor,
            praticidade e percepção de resultado no treino e no pós-treino.
          </p>
        </div>

        <div className="relative mx-auto max-w-[340px] sm:max-w-[390px]">
          <button
            type="button"
            onClick={previous}
            aria-label="Depoimento anterior"
            className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl font-black text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 sm:-left-12"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl font-black text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 sm:-right-12"
          >
            ›
          </button>

          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 to-violet-950 shadow-[0_20px_50px_-15px_rgba(108,75,200,0.45)]">
            <button
              type="button"
              aria-label={`Reproduzir ${active.title}`}
              className="group relative flex h-full w-full items-center justify-center"
            >
              <img
                src={active.poster}
                alt={active.title}
                width="720"
                height="1280"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-violet-950/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-1.5">
            {testimonials.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-6 bg-zinc-900'
                    : 'w-1.5 bg-zinc-300 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[560px] rounded-r-xl border-l-4 border-violet-600 bg-violet-100 p-3 sm:mt-10 sm:p-4">
          <p className="text-[0.85rem] font-semibold leading-[1.65] text-zinc-900 sm:text-[0.95rem]">
            Depoimentos em formato vertical aumentam a confiança e aproximam a
            comunicação da linguagem de redes sociais.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection