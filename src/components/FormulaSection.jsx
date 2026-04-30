const benefits = [
  'Recuperação mais rápida após o treino.',
  'Mais foco e concentração.',
  'Menos cãibras e dores musculares.',
  'Menos pernas pesadas e fadiga acumulada.',
  'Menos dores de cabeça e enxaquecas.',
  'Mais disposição e energia durante e depois do treino.',
]

const tags = ['100% Natural', 'Zero Açúcar', 'Sem Calorias', 'Sem Conservantes']

const activationItems = [
  {
    icon: '⚡',
    text: 'Dissolve fácil',
  },
  {
    icon: '↗',
    text: 'Mistura completa e uniforme',
  },
  {
    icon: '⌁',
    text: 'Rápida absorção',
  },
]

function NumberBadge({ number, color = 'purple' }) {
  const styles = {
    purple: 'bg-violet-100 text-violet-700',
    lime: 'bg-lime-100 text-lime-700',
    teal: 'bg-cyan-100 text-cyan-700',
  }

  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full text-[0.8rem] font-extrabold tracking-[0.05em] sm:h-10 sm:w-10 sm:text-[0.85rem] ${styles[color]}`}
    >
      {number}
    </div>
  )
}

function InfoCard({ number, color, image, imageAlt, imageClass, title, children }) {
  return (
    <div className="rounded-[16px] border border-black/[0.04] bg-white p-6 transition-all duration-500 ease-out hover:border-dashed hover:border-lime-300/60 hover:shadow-[0_0_20px_-8px_rgba(199,255,5,0.2)] sm:rounded-[20px] sm:p-8">
      <div className="mb-3 flex items-start justify-between sm:mb-4">
        <NumberBadge number={number} color={color} />

        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className={imageClass}
          />
        ) : null}
      </div>

      <h3 className="mb-2 text-[1.05rem] font-extrabold text-zinc-900 sm:text-[1.15rem]">
        {title}
      </h3>

      {children}
    </div>
  )
}

function FormulaSection() {
  return (
    <section
      id="produto"
      className="relative overflow-hidden bg-[#faf9fb] px-5 py-12 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-[700px] text-center sm:mb-14">
          <div className="mb-3 flex justify-center sm:mb-4">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-lime-400">
              ⋮
            </span>
          </div>

          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900 sm:mb-4">
            <b>
              Hidratação{' '}
              <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
                Inteligente
              </span>
            </b>{' '}
            e <b>Funcional</b>
          </h2>

          <p className="text-[0.9rem] leading-[1.7] text-zinc-700 sm:text-[1.05rem]">
            <b>Burble Fresh</b> é um suplemento para{' '}
            <b>reposição de eletrólitos</b> que combina <b>sais minerais</b> e{' '}
            <b>vitaminas essenciais</b> com <b>ingredientes funcionais</b>,
            formulado para sustentar o <b>desempenho</b> <b>antes</b>,{' '}
            <b>durante</b> e <b>depois</b> dos <b>treinos</b>.
          </p>
        </div>

        <div className="relative mb-6 sm:mb-10">
          <img
            src="https://shop.burblefresh.com.br/assets/produto-BqIQ0qoq.webp"
            alt="Burble Fresh - sachê e bebida preparada"
            width="900"
            height="647"
            decoding="async"
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />

          <img
            src="https://shop.burblefresh.com.br/assets/selo-zero-acucar-9eygkCGP.webp"
            alt="Zero Açúcar"
            width="463"
            height="256"
            className="pointer-events-none absolute bottom-[8%] -right-[6px] z-10 h-auto w-[64px] drop-shadow-lg sm:-right-[14px] sm:w-[86px]"
          />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-10 sm:gap-6 md:grid-cols-2">
          <InfoCard
            number="01"
            color="purple"
            image="https://shop.burblefresh.com.br/assets/selo-zero-acucar-9eygkCGP.webp"
            imageAlt="667mg de Eletrólitos"
            imageClass="h-auto w-[96px] sm:w-[110px]"
            title="Composição"
          >
            <p className="text-[0.85rem] leading-[1.65] text-zinc-500 sm:text-[0.9rem]">
              Contém <b>Sódio</b>, <b>Potássio</b> e <b>Magnésio</b>, além de{' '}
              <b>Cálcio</b> que contribui para a <b>saúde óssea</b> e vitaminas:{' '}
              <b>B5</b>, <b>B6</b> e <b>B12</b>, formulado para dar mais{' '}
              <b>foco</b>, <b>disposição</b> e <b>energia</b>.
            </p>
          </InfoCard>

          <InfoCard
            number="02"
            color="lime"
            image="https://shop.burblefresh.com.br/assets/selo-formula-limpa-CD7YEiL9.webp"
            imageAlt="Fórmula Limpa"
            imageClass="-mt-4 h-auto w-[74px] sm:-mt-6 sm:w-[80px]"
            title="Fórmula Limpa"
          >
            <p className="text-[0.85rem] leading-[1.65] text-zinc-500 sm:text-[0.9rem]">
              Fórmula <b>100% Limpa</b>: <b>Zero</b> Açúcar, <b>Zero</b>{' '}
              Calorias, <b>Sem</b> Conservantes e <b>Sem</b> Aditivos
              Artificiais. Corantes e Aromatizantes <b>100% Naturais</b>,{' '}
              <b>Sem</b> Glúten, <b>Sem</b> Lactose e <b>Adoçado</b>{' '}
              naturalmente com <b>Stevia</b>.
            </p>
          </InfoCard>
        </div>

        <div className="mb-6 sm:mb-10">
          <InfoCard
            number="03"
            color="teal"
            image="https://shop.burblefresh.com.br/assets/selo-beneficios-CAej3drY.webp"
            imageAlt="Benefícios"
            imageClass="-mt-3 h-auto w-[60px] sm:-mt-4 sm:w-[66px]"
            title="Benefícios"
          >
            <ul className="space-y-2 text-[0.85rem] leading-[1.65] text-zinc-500 sm:text-[0.9rem]">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="mr-1.5 font-bold text-lime-500">→</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-[#faf9fb] px-3 py-1 text-[0.7rem] font-semibold text-zinc-700 sm:text-[0.75rem]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  {tag}
                </span>
              ))}
            </div>
          </InfoCard>
        </div>

        <div className="mx-auto mb-6 flex max-w-[760px] flex-col gap-6 sm:mb-10 sm:gap-8">
          <InfoCard
            number="04"
            color="purple"
            image="https://shop.burblefresh.com.br/assets/selo-bolhas-ativacao-DOBLlQ-Q.webp"
            imageAlt="Bolhas de Ativação - Rápida Absorção"
            imageClass="h-auto w-[110px] sm:w-[120px]"
            title="Bolhas de Ativação"
          >
            <div className="mb-4 mt-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-transparent">
                <video
                  poster="https://shop.burblefresh.com.br/assets/poster-main-v2-BOLSwQmd.webp"
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  style={{ objectPosition: 'center top' }}
                >
                  <source
                    src="https://shop.burblefresh.com.br/assets/video-main-v2-gQaRfnpq.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 right-0 top-[calc(50%-4px)] h-2 bg-[#faf9fb]" />
                  <div className="absolute bottom-0 left-[calc(50%-4px)] top-1/2 w-2 bg-[#faf9fb]" />
                </div>
              </div>
            </div>

            <p className="mb-4 text-[0.85rem] leading-[1.65] text-zinc-500 sm:text-[0.9rem]">
              Para uma <b>Hidratação</b> mais <b>eficiente</b>. Ativadas em
              contato com a água, iniciam o processo de <b>diluição imediata</b>{' '}
              dos <b>ingredientes ativos</b>.
            </p>

            <div className="flex flex-col items-stretch gap-2.5">
              {activationItems.map((item) => (
                <div
                  key={item.text}
                  className="flex min-h-[40px] w-full items-center gap-3 rounded-xl border border-transparent bg-[#faf9fb] px-3 py-2 transition-all duration-200 hover:border-lime-300 hover:bg-lime-50 sm:min-h-[52px] sm:max-w-[260px] sm:self-start sm:p-3 sm:pl-3 sm:pr-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-300 text-sm font-black text-zinc-900">
                    {item.icon}
                  </div>

                  <span className="text-[0.85rem] font-semibold leading-tight text-zinc-900">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-r-xl border-l-4 border-violet-600 bg-violet-100 p-3 sm:p-4">
              <p className="text-[0.85rem] font-semibold leading-[1.65] text-zinc-900 sm:text-[0.95rem]">
                O corpo absorve os <b>nutrientes</b> com <b>agilidade</b>,
                potencializando os <b>efeitos da fórmula</b> desde a{' '}
                <b>primeira dose</b>.
              </p>
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}

export default FormulaSection