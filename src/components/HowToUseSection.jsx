const steps = [
  {
    number: '1',
    title: 'Adicione',
    image: 'https://shop.burblefresh.com.br/assets/como-usar-1-CnVRaybm.png',
    alt: 'Mulher adicionando sachê Burble Fresh em garrafa de água',
    text: 'Dilua o conteúdo de 1 sachê equivalente a 7 g em 350 a 500 ml de água.',
  },
  {
    number: '2',
    title: 'Ative',
    image: 'https://shop.burblefresh.com.br/assets/como-usar-2-CD_s72tH.png',
    alt: 'Garrafa Burble com bolhas de ativação em diluição rápida',
    text: 'As Bolhas de ativação iniciam o processo de diluição rápida imediatamente em contato com a água.',
  },
  {
    number: '3',
    title: 'Hidrate-se',
    image: 'https://shop.burblefresh.com.br/assets/como-usar-3-CTRTJ1jY.png',
    alt: 'Mulher se hidratando com Burble Fresh ao ar livre',
    text: 'Consuma antes, durante ou depois do treino para apoiar sua hidratação, disposição e recuperação.',
  },
]

function HowToUseSection() {
  return (
    <section id="como-usar" className="bg-[#faf9fb] px-5 py-[30px] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-6 max-w-[640px] text-center sm:mb-10">
          <div className="mb-3 flex justify-center sm:mb-4">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-violet-600">
              ⋮
            </span>
          </div>

          <div className="mb-3 flex justify-center sm:mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 shadow-[0_1px_4px_rgba(0,0,0,0.04)] sm:px-4 sm:text-[0.75rem]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
              Como usar
            </div>
          </div>

          <h2 className="mb-2 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900 sm:mb-3">
            Como se{' '}
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              hidratar
            </span>{' '}
            com Burble Fresh?
          </h2>

          <p className="text-[0.9rem] leading-[1.65] text-zinc-700/70 sm:text-[1.05rem]">
            Prático, rápido e eficiente, em poucos segundos e você já está
            hidratada.
          </p>
        </div>

        <div
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:gap-5 sm:px-0 md:gap-6 [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Carrossel de passos para usar Burble Fresh"
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="group w-[85%] shrink-0 snap-center sm:w-[70%] md:w-[calc((100%-3rem)/3)]"
              aria-roledescription="slide"
              aria-label={`Passo ${step.number} de 3: ${step.title}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width="900"
                    height="1125"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-[-24px] z-20 -translate-x-1/2 sm:top-[-28px]">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-md" />

                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-violet-600 shadow-[0_8px_22px_-6px_rgba(158,143,250,0.7)] sm:h-12 sm:w-12">
                        <span className="text-[1.1rem] font-extrabold leading-none text-white sm:text-[1.2rem]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-4 text-left sm:px-5 sm:pb-5 sm:pt-5">
                    <h3 className="mb-1.5 text-[1.1rem] font-extrabold tracking-[-0.01em] text-zinc-900 sm:text-[1.25rem]">
                      {step.title}
                    </h3>

                    <div className="relative pl-3">
                      <span className="absolute bottom-0 left-0 top-0 w-[3px] rounded-full bg-violet-600" />

                      <p className="text-[0.85rem] leading-[1.55] text-zinc-700/75 sm:text-[0.92rem]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-[0.85rem] font-extrabold uppercase text-zinc-900 shadow-[0_4px_20px_rgba(199,255,5,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-[0_8px_28px_rgba(199,255,5,0.45)] sm:text-[0.95rem]"
          >
            Quero experimentar agora
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowToUseSection