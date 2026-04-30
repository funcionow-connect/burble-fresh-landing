import { useState } from 'react'

const offerImages = [
  {
    src: 'https://shop.burblefresh.com.br/assets/oferta-pair-left-Bhy8hHqq.webp',
    alt: 'Burble Fresh Lemon Lime',
  },
  {
    src: 'https://shop.burblefresh.com.br/assets/oferta-pair-right-NZrYocT9.webp',
    alt: 'Burble Fresh Blue Ice',
  },
]

const packages = [
  {
    name: 'Leve 1 pacote',
    description: 'Para experimentar Burble Fresh na sua rotina.',
    price: 'R$ 69,90',
    badge: 'Experimente',
    featured: false,
  },
  {
    name: 'Leve 2 pacotes',
    description: 'Ideal para usar antes, durante e depois dos treinos.',
    price: 'R$ 119,90',
    badge: 'Mais escolhido',
    featured: true,
  },
  {
    name: 'Leve 4 pague 3',
    description: 'Melhor custo-benefício para manter o ritmo.',
    price: 'R$ 209,90',
    badge: 'Melhor oferta',
    featured: false,
  },
]

function OfferSection() {
  const [activeImage, setActiveImage] = useState(0)

  function nextImage() {
    setActiveImage((current) =>
      current === offerImages.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-[#faf9fb] px-0 py-12 sm:py-20"
    >
      <div className="mx-auto mb-6 max-w-[760px] px-4 sm:mb-8 sm:px-5">
        <div className="overflow-hidden rounded-2xl bg-yellow-300 shadow-[0_8px_28px_rgba(234,179,8,0.22)]">
          <div className="flex flex-row items-end justify-between gap-4 px-5 py-4 text-center text-zinc-900 sm:px-6 sm:py-5">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black uppercase leading-none tracking-[-0.02em] sm:text-[1.2rem]">
                Oferta especial de lançamento
              </p>

              <p className="mt-1 text-[0.6rem] font-bold uppercase leading-tight tracking-[0.04em] sm:text-[0.7rem]">
                Você ganhou frete full grátis
              </p>
            </div>

            <div className="mr-4 flex shrink-0 flex-col items-center leading-none sm:mr-8">
              <span className="text-[1.4rem] font-bold leading-none tabular-nums tracking-[-0.02em] sm:text-[1.55rem]">
                05:00
              </span>

              <div className="mt-[3px] grid w-full grid-cols-2 gap-x-1">
                <span className="text-center text-[0.55rem] font-bold tracking-[0.18em]">
                  MIN
                </span>
                <span className="text-center text-[0.55rem] font-bold tracking-[0.18em]">
                  SEG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[760px] px-4 sm:px-5">
        <div className="overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]">
          <div className="bg-[#f4f4f5] p-1.5 sm:p-2">
            <div className="relative">
              <div className="relative aspect-square max-h-[520px] w-full overflow-hidden rounded-2xl bg-white">
                <img
                  src={offerImages[activeImage].src}
                  alt={offerImages[activeImage].alt}
                  width="1200"
                  height="1200"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full bg-white object-contain py-2 sm:py-4"
                />

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Próxima imagem"
                  className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-lg font-black text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 sm:right-3 sm:h-10 sm:w-10"
                >
                  ›
                </button>

                <div className="absolute left-0 top-0 z-20 inline-flex items-center gap-1 rounded-br-2xl rounded-tl-2xl bg-zinc-50 px-3 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-tight text-zinc-900 shadow-sm sm:text-[0.7rem]">
                  🧊🍋 <span className="text-cyan-500">Blue Ice</span>
                  <span className="lowercase">e</span>
                  <span className="text-lime-600">Lemon Lime</span>
                </div>

                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                  {offerImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Ir para oferta ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeImage === index
                          ? 'w-6 bg-zinc-900'
                          : 'w-1.5 bg-zinc-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
            <div className="mb-4 rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3">
              <p className="text-center text-[0.78rem] font-extrabold uppercase tracking-wide text-violet-800 sm:text-[0.9rem]">
                Escolha seu kit Burble Fresh
              </p>
            </div>

            <div className="space-y-3">
              {packages.map((item) => (
                <label
                  key={item.name}
                  className={`block cursor-pointer rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    item.featured
                      ? 'border-violet-600 bg-violet-700 text-white shadow-[0_12px_32px_rgba(124,58,237,0.22)]'
                      : 'border-zinc-200 bg-white text-zinc-900 hover:border-lime-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={`mb-2 inline-flex rounded-full px-3 py-1 text-[0.65rem] font-black uppercase ${
                          item.featured
                            ? 'bg-lime-300 text-zinc-900'
                            : 'bg-zinc-100 text-zinc-500'
                        }`}
                      >
                        {item.badge}
                      </div>

                      <h3 className="text-[0.98rem] font-black sm:text-[1.1rem]">
                        {item.name}
                      </h3>

                      <p
                        className={`mt-1 text-[0.78rem] font-medium leading-relaxed sm:text-[0.85rem] ${
                          item.featured ? 'text-white/75' : 'text-zinc-500'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-xl font-black leading-none sm:text-2xl ${
                          item.featured ? 'text-lime-300' : 'text-red-600'
                        }`}
                      >
                        {item.price}
                      </div>

                      <div
                        className={`mt-1 text-[0.6rem] font-black uppercase ${
                          item.featured ? 'text-white/55' : 'text-zinc-400'
                        }`}
                      >
                        pagamento seguro
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-lime-50 px-4 py-3 ring-1 ring-lime-200">
              <p className="text-center text-[0.82rem] font-black text-zinc-900">
                Prêmios restantes:{' '}
                <span className="text-violet-700">37 unidades</span>
              </p>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[37%] rounded-full bg-lime-300" />
              </div>
            </div>

            <a
              href="https://shop.burblefresh.com.br/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-4 text-center text-[0.9rem] font-extrabold uppercase text-zinc-900 shadow-[0_4px_20px_rgba(199,255,5,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-[0_8px_28px_rgba(199,255,5,0.45)]"
            >
              Comprar agora
              <span>→</span>
            </a>

            <p className="mt-3 text-center text-[0.72rem] font-bold text-zinc-500">
              Compra segura • Entrega rápida • Atendimento via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection