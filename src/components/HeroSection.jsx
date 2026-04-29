function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f8] px-6 pb-16 pt-32">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/25 blur-3xl" />
      <div className="absolute right-[20%] top-24 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wide text-zinc-700 shadow-sm ring-1 ring-zinc-200">
          <span className="h-2 w-2 rounded-full bg-lime-300" />
          Hidratação inteligente
        </div>

        <h1 className="max-w-2xl text-[28px] font-black leading-tight tracking-tight text-zinc-950 md:text-4xl">
          Para você treinar melhor e manter o ritmo na rotina com mais{' '}
          <span className="text-violet-600">foco</span>, disposição e energia.
        </h1>

        <div className="mt-8 w-full max-w-md rounded-[1.6rem] bg-white p-4 shadow-2xl shadow-violet-200/50 ring-1 ring-zinc-200">
          <div className="relative flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-zinc-50 via-lime-50 to-violet-100 p-7">
            <div className="absolute left-5 top-5 rounded-2xl bg-white px-4 py-3 text-left shadow-lg">
              <div className="text-[10px] font-black uppercase text-violet-600">
                Sabor marcante
              </div>
              <div className="text-xs font-bold text-zinc-700">
                Blue Ice / Lemon Lime
              </div>
            </div>

            <div className="flex items-end justify-center gap-4">
              <div className="flex h-56 w-36 rotate-[-5deg] items-center justify-center rounded-[1.5rem] bg-white shadow-xl ring-1 ring-zinc-200">
                <div className="flex h-48 w-28 items-center justify-center rounded-2xl bg-violet-600">
                  <div className="text-center">
                    <div className="text-5xl font-black text-lime-300">b</div>
                    <div className="mt-2 text-xs font-black uppercase tracking-widest text-white">
                      Burble
                    </div>
                    <div className="text-xs font-black uppercase tracking-widest text-white">
                      Fresh
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 hidden h-40 w-24 rotate-[4deg] items-center justify-center rounded-2xl bg-lime-300 shadow-xl md:flex">
                <span className="text-center text-xs font-black uppercase text-zinc-900">
                  stick
                  <br />
                  efervescente
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 rounded-2xl bg-lime-300 px-4 py-3 text-left shadow-lg">
              <div className="text-[10px] font-black uppercase text-zinc-700">
                Avaliação imediata
              </div>
              <div className="text-xs font-bold text-zinc-900">
                Rápida absorção
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="text-sm font-black text-yellow-500">★★★★★</div>
          <div className="text-xs font-black text-zinc-700">4,9/5.0</div>
          <div className="flex -space-x-2">
            <div className="h-8 w-8 rounded-full border-2 border-white bg-violet-300" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-lime-300" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-zinc-300" />
            <div className="h-8 w-8 rounded-full border-2 border-white bg-violet-500" />
          </div>
        </div>

        <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-zinc-600">
          Burble Fresh repõe eletrólitos e sais minerais essenciais que o corpo
          perde no suor, para uma recuperação mais rápida, reduzindo o cansaço
          intenso, câibras, fadiga e dores musculares.
        </p>

        <a
          href="#oferta"
          className="mt-7 rounded-full bg-lime-300 px-8 py-4 text-xs font-black uppercase text-zinc-950 shadow-lg transition hover:scale-105 hover:bg-lime-200"
        >
          Quero mais disposição e energia
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] font-bold text-zinc-500">
          <span>+ 667 mg de eletrólitos</span>
          <span>+ 100% natural</span>
          <span>+ Zero açúcar</span>
          <span>+ Sem calorias</span>
          <span>+ Sem conservantes</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection