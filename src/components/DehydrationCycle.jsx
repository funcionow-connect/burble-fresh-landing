const cycleSteps = [
  {
    number: '1',
    title: 'Treino, suor e perda',
    text: 'Durante o exercício, seu corpo perde nutrientes e vitaminas essenciais pelo suor.',
  },
  {
    number: '2',
    title: 'Falta energia – quebra',
    text: 'Sem esses nutrientes, seu corpo não consegue manter o mesmo ritmo e a performance cai.',
  },
  {
    number: '3',
    title: 'Sinais de desidratação',
    text: 'Cãibras, pernas pesadas, dor de cabeça, tontura e fadiga começam a aparecer.',
  },
  {
    number: '4',
    title: 'Desequilíbrio entre corpo e mente',
    text: 'A desidratação afeta a concentração, o humor e a disposição para o resto do dia.',
  },
  {
    number: '5',
    title: 'Recuperação lenta e ciclo vicioso',
    text: 'Sem reposição adequada, o corpo demora para se recuperar e o ciclo recomeça no próximo treino.',
  },
]

function DehydrationCycle() {
  return (
    <section id="ciclo" className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-2 flex justify-center sm:mb-3">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-violet-600">
              ⋮
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#faf9fb] px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            O Ciclo da Desidratação
          </div>

          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            Quando você treina, o seu corpo perde no suor nutrientes e vitaminas
            essenciais que causa a{' '}
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              Desidratação
            </span>
            .
          </h2>

          <p className="text-[0.9rem] leading-[1.7] text-zinc-600 sm:text-[1.05rem]">
            A perda de apenas 2 a 3% de nutrientes e vitaminas essenciais já é
            suficiente para impactar negativamente o seu desempenho físico e
            cognitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-10">
          <div className="relative flex w-full justify-center">
            <img
              src="https://shop.burblefresh.com.br/assets/ciclo-desidratacao-info-C3o9Z6R7.webp"
              alt="Ciclo da Desidratação - 5 etapas"
              width="727"
              height="1016"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full max-w-[320px] object-contain sm:max-w-[380px] lg:max-w-[400px]"
            />
          </div>

          <ol className="flex flex-col gap-2.5 sm:gap-3">
            {cycleSteps.map((step) => (
              <li
                key={step.number}
                tabIndex="0"
                className="group flex cursor-default items-stretch overflow-hidden rounded-xl border-2 border-violet-500/30 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-[#EAE553] hover:bg-[#FCFBDF] hover:shadow-[0_4px_18px_rgba(199,255,5,0.18)] focus-visible:border-[#EAE553] focus-visible:bg-[#FCFBDF] focus-visible:outline-none active:scale-[0.99]"
              >
                <div className="flex w-10 shrink-0 items-center justify-center bg-zinc-900 sm:w-14">
                  <span className="text-[1.25rem] font-extrabold leading-none text-lime-300 transition-colors duration-200 group-hover:text-[#EAE553] sm:text-[1.75rem]">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3.5">
                  <h3 className="mb-0.5 text-[0.72rem] font-extrabold uppercase leading-tight tracking-wide text-lime-600 transition-colors duration-200 group-hover:text-[#EAE553] sm:mb-1 sm:text-[0.85rem]">
                    {step.title}
                  </h3>

                  <p className="text-[0.74rem] leading-[1.4] text-zinc-700 sm:text-[0.88rem] sm:leading-[1.5]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-10 max-w-[760px] rounded-r-xl border-l-4 border-yellow-300 bg-yellow-50 p-3 sm:mt-12 sm:p-4">
          <p className="text-[0.85rem] font-semibold leading-[1.65] text-zinc-900 sm:text-[0.95rem]">
            Você treina. Sua <b>energia</b> esgota. O corpo sente. A mente
            também perde o ritmo, e o <b>ciclo</b> se repete: você{' '}
            <b>quebra no treino</b> e continua na rotina, a <b>recuperação</b>{' '}
            fica cada vez mais lenta e a <b>fadiga</b> vai acumulando.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DehydrationCycle