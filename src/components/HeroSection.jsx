import { useState } from 'react'

const heroImages = [
  'https://shop.burblefresh.com.br/assets/hero-blue-mix-Be60YAZF.webp',
  'https://shop.burblefresh.com.br/assets/hero-lemon-lime-DV6A5WGc.webp',
]

const avatars = [
  'https://shop.burblefresh.com.br/assets/avatar-1-D_Rj2vz7.webp',
  'https://shop.burblefresh.com.br/assets/avatar-2-BJ8pqUve.webp',
  'https://shop.burblefresh.com.br/assets/avatar-6-orDyHLqJ.webp',
  'https://shop.burblefresh.com.br/assets/avatar-8-DzYg5b4E.webp',
]

const benefits = [
  {
    icon: '⚡',
    text: 'Mais disposição e energia no treino.',
  },
  {
    icon: '↗',
    text: 'Recuperação rápida, sem queda no dia.',
  },
  {
    icon: '⌁',
    text: 'Sem pernas pesadas ou fadiga.',
  },
]

const tags = [
  '667 mg de Eletrólitos',
  '100% Natural',
  'Zero Açúcar',
  'Sem Calorias',
  'Sem Conservantes',
  'Sabor Leve e Refrescante',
]

function HeroSection() {
  const [activeImage, setActiveImage] = useState(0)

  function nextImage() {
    setActiveImage((current) => (current === heroImages.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#faf9fb] to-[#eee7ff] px-5 pb-12 pt-[88px] sm:px-8 sm:pt-[100px]">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-4 mt-4 flex justify-center sm:mb-5 sm:mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#faf9fb] px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            Hidratação Inteligente
          </div>
        </div>

        <h1 className="mb-6 max-w-2xl px-0 text-xl font-extrabold leading-[1.12] tracking-[-0.03em] text-zinc-900 sm:mb-8 sm:px-[35px] sm:text-[1.65rem] sm:leading-[1.05] sm:tracking-[-0.035em] lg:text-[1.85rem]">
          <span className="text-violet-600">Para você</span> treinar melhor{' '}
          <span className="text-violet-600">e</span> manter o ritmo{' '}
          <span className="text-violet-600">na rotina com mais</span> foco,
          disposição e energia<span className="text-violet-600">.</span>
        </h1>

        <div className="relative mb-6 w-full max-w-[320px] sm:mb-8 sm:max-w-lg">
          <div className="relative aspect-square max-h-[520px] overflow-hidden rounded-3xl">
            <img
              src={heroImages[activeImage]}
              alt="Burble Fresh"
              className="h-full w-full object-cover transition-all duration-500"
            />

            <button
              type="button"
              onClick={nextImage}
              aria-label="Próxima imagem"
              className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-lg font-black text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 sm:right-3 sm:h-10 sm:w-10"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {heroImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeImage === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -left-3 top-[12%] z-10 flex items-center gap-2 rounded-xl border border-violet-500/15 bg-[#f5f5f6] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:-left-[4%] sm:gap-3 sm:rounded-2xl sm:px-[18px] sm:py-3.5 md:-left-[10%]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-br from-violet-600 to-violet-900 text-white shadow-[0_2px_8px_rgba(124,58,237,0.4)] sm:h-9 sm:w-9 sm:rounded-[10px]">
              +
            </div>

            <div>
              <div className="text-left text-[0.7rem] font-bold leading-tight text-zinc-900 sm:text-[0.8rem]">
                Sais Minerais
              </div>
              <div className="text-left text-[0.6rem] font-medium text-zinc-500 sm:text-[0.7rem]">
                B5, B6 e B12
              </div>
            </div>
          </div>

          <div className="absolute -right-3 bottom-[10%] z-10 flex items-center gap-2 rounded-xl border border-lime-300/30 bg-[#f5f5f6] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:-right-[4%] sm:gap-3 sm:rounded-2xl sm:px-[18px] sm:py-3.5 md:-right-[10%]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-br from-lime-300 to-lime-500 text-zinc-950 shadow-[0_2px_8px_rgba(199,255,5,0.45)] sm:h-9 sm:w-9 sm:rounded-[10px]">
              ↗
            </div>

            <div>
              <div className="text-left text-[0.7rem] font-bold leading-tight text-zinc-900 sm:text-[0.8rem]">
                Ativação Imediata
              </div>
              <div className="text-left text-[0.6rem] font-medium text-zinc-500 sm:text-[0.7rem]">
                Rápida Absorção
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-7 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <div className="text-[0.9rem] font-black text-yellow-400">★★★★★</div>
            <span className="text-[0.8rem] font-bold text-zinc-900 sm:text-[0.9rem]">
              4.9/5.0
            </span>
          </div>

          <div className="flex -space-x-2.5">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm sm:h-11 sm:w-11"
              />
            ))}
          </div>
        </div>

        <p className="mx-auto mb-5 max-w-[600px] px-0 text-[0.85rem] leading-[1.6] text-zinc-700 sm:mb-6 sm:text-sm">
          <b>Burble Fresh</b> repõe <b>Eletrólitos</b> e{' '}
          <b>sais minerais essenciais</b> que o corpo <b>perde no suor</b>, para
          uma <b>recuperação</b> mais rápida, reduzindo o{' '}
          <b>cansaço intenso</b>, <b>cãibras</b>, <b>fadiga</b> e{' '}
          <b>dores musculares</b>.
        </p>

        <ul className="mb-6 flex w-full max-w-[560px] flex-col gap-2.5 text-left sm:mb-8 sm:gap-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.text}
              className="flex cursor-default items-center gap-3 rounded-2xl border border-zinc-100 bg-white px-3.5 py-2.5 shadow-sm transition-all duration-300 hover:border-lime-300 hover:bg-lime-50 hover:shadow-[0_0_0_3px_rgba(199,255,5,0.15)] sm:px-4 sm:py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-zinc-900 sm:h-10 sm:w-10">
                {benefit.icon}
              </span>
              <span className="text-[0.8rem] font-semibold leading-snug text-zinc-800 sm:text-[0.9rem]">
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mb-2 flex w-full items-center justify-center px-0 sm:mb-3">
          <a
            href="#oferta"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-lime-300 px-4 py-3 text-center text-xs font-extrabold uppercase leading-tight text-zinc-900 shadow-[0_4px_20px_rgba(199,255,5,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-400 hover:shadow-[0_8px_28px_rgba(199,255,5,0.45)] active:scale-[0.98] sm:w-auto sm:px-10 sm:py-[18px] sm:text-[1.05rem]"
          >
            Quero mais disposição e energia
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mx-auto mt-3 mb-2 flex max-w-[640px] flex-wrap justify-center gap-x-4 gap-y-2 px-0 sm:mt-4 sm:mb-5 sm:gap-x-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-zinc-500 sm:text-[0.78rem]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300 shadow-[0_0_6px_rgba(199,255,5,0.6)]" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection