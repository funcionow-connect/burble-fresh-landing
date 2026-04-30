const modalities = [
  {
    name: 'Crossfit',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-crossfit-D8u67BrV.webp',
  },
  {
    name: 'Beach Tênis',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-beach-tenis-Cre2O5KQ.webp',
  },
  {
    name: 'Corrida',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-corrida-CkZXd2J3.webp',
  },
  {
    name: 'Academia',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-academia-C3h8qsch.webp',
  },
  {
    name: 'Ciclismo',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-ciclismo-lHMKgzmV.webp',
  },
  {
    name: 'Funcional',
    image: 'https://shop.burblefresh.com.br/assets/modalidade-funcional-D4TUIyeI.webp',
  },
]

function AudienceSection() {
  return (
    <section
      id="pra-quem"
      className="relative mx-4 my-4 overflow-hidden rounded-2xl bg-gradient-to-br from-violet-800 via-violet-700 to-zinc-950 px-5 py-[30px] text-white sm:mx-[20px] sm:my-6 sm:px-8 sm:py-20"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-6 max-w-[700px] sm:mb-10">
          <div className="mb-3 flex justify-center sm:mb-4">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-lime-300">
              ⋮
            </span>
          </div>

          <h2 className="mb-2 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:mb-3">
            Para <em className="not-italic text-lime-300">mulheres</em> que
            estão em constante <b>movimento</b>.
          </h2>

          <p className="text-[0.9rem] leading-[1.7] text-white/80 sm:text-[1.05rem]">
            Que conciliam uma <b>rotina intensa</b> com a prática de{' '}
            <b>atividade física</b>, como forma de <b>equilíbrio</b> para
            organizar a <b>mente</b>, aliviar a <b>pressão</b> e manter o ritmo
            com mais <b>foco</b>, <b>disposição</b> e <b>energia</b>.
          </p>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {modalities.map((item) => (
            <div
              key={item.name}
              className="group relative aspect-[3/4] cursor-default overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                width="800"
                height="1200"
                decoding="async"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="max-w-[700px]">
          <p className="text-[0.88rem] leading-[1.7] text-white/85 sm:text-[0.98rem]">
            Mais do que oferecer{' '}
            <b className="text-lime-300">suporte nos treinos</b>, a Burble Fresh
            existe para ajudar o corpo a continuar respondendo bem ao que vem
            depois: <b>trabalho</b>, <b>rotina</b>, <b>decisões</b>,{' '}
            <b>compromissos</b> e <b>vida real</b>.
          </p>
        </div>

        <div className="mt-4 max-w-[700px] rounded-r-xl border-l-[5px] border-lime-300 bg-white/10 p-3 shadow-[0_4px_20px_rgba(199,255,5,0.08)] backdrop-blur-sm sm:mt-5 sm:p-4">
          <p className="text-[0.9rem] font-extrabold leading-[1.55] tracking-[-0.01em] text-white sm:text-[1rem]">
            Você <b>treina melhor</b> e mantém o <b>ritmo</b> na{' '}
            <b>rotina real</b>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AudienceSection