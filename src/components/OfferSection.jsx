const packages = [
  {
    name: 'Leve 1 pacote',
    description: 'Ideal para experimentar',
    price: 'R$ 69,90',
    tag: '1 unidade',
    featured: false,
  },
  {
    name: 'Leve 2 pacotes',
    description: 'Mais escolhido para rotina',
    price: 'R$ 119,90',
    tag: 'Economize',
    featured: true,
  },
  {
    name: 'Leve 4 pague 3',
    description: 'Melhor custo-benefício',
    price: 'R$ 209,90',
    tag: 'Mais vantajoso',
    featured: false,
  },
]

function OfferSection() {
  return (
    <section id="oferta" className="bg-[#f7f7f8] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl bg-yellow-300 px-6 py-4 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-wide text-zinc-950">
            Oferta especial por tempo limitado
          </p>
          <p className="mt-1 text-xs font-bold text-zinc-700">
            Brindes e condições podem acabar a qualquer momento.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-zinc-200">
          <div className="bg-violet-700 px-6 py-5 text-center text-white">
            <div className="text-xs font-black uppercase tracking-widest text-lime-300">
              Escolha seu kit
            </div>
            <h2 className="mt-2 text-2xl font-black md:text-4xl">
              Garanta sua Burble Fresh agora
            </h2>
          </div>

          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-violet-100 via-white to-lime-100 p-6">
              <div className="flex min-h-[360px] items-center justify-center">
                <div className="flex h-72 w-48 rotate-[-5deg] items-center justify-center rounded-[2rem] bg-white shadow-2xl ring-1 ring-zinc-200">
                  <div className="flex h-64 w-40 items-center justify-center rounded-[1.7rem] bg-violet-600">
                    <div className="text-center">
                      <div className="text-7xl font-black text-lime-300">b</div>
                      <div className="mt-3 text-base font-black uppercase tracking-widest text-white">
                        Burble
                      </div>
                      <div className="text-sm font-black uppercase tracking-widest text-white">
                        Fresh
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white px-3 py-4 shadow-sm">
                  <div className="text-lg font-black text-violet-700">0</div>
                  <div className="text-[10px] font-black uppercase text-zinc-500">
                    açúcar
                  </div>
                </div>

                <div className="rounded-2xl bg-white px-3 py-4 shadow-sm">
                  <div className="text-lg font-black text-violet-700">0</div>
                  <div className="text-[10px] font-black uppercase text-zinc-500">
                    calorias
                  </div>
                </div>

                <div className="rounded-2xl bg-white px-3 py-4 shadow-sm">
                  <div className="text-lg font-black text-violet-700">+</div>
                  <div className="text-[10px] font-black uppercase text-zinc-500">
                    energia
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 rounded-2xl bg-lime-50 px-5 py-4 ring-1 ring-lime-200">
                <p className="text-sm font-black text-zinc-950">
                  Prêmios restantes: <span className="text-violet-700">37 unidades</span>
                </p>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[37%] rounded-full bg-lime-300" />
                </div>
              </div>

              <div className="space-y-4">
                {packages.map((item) => (
                  <label
                    key={item.name}
                    className={`block cursor-pointer rounded-3xl p-5 ring-2 transition hover:scale-[1.01] ${
                      item.featured
                        ? 'bg-violet-700 text-white ring-violet-700'
                        : 'bg-white text-zinc-950 ring-zinc-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className={`mb-2 inline-flex rounded-full px-3 py-1 text-[10px] font-black uppercase ${
                            item.featured
                              ? 'bg-lime-300 text-zinc-950'
                              : 'bg-zinc-100 text-zinc-500'
                          }`}
                        >
                          {item.tag}
                        </div>

                        <h3 className="text-lg font-black">{item.name}</h3>

                        <p
                          className={`mt-1 text-sm font-medium ${
                            item.featured ? 'text-white/70' : 'text-zinc-500'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <div
                          className={`text-2xl font-black ${
                            item.featured ? 'text-lime-300' : 'text-red-600'
                          }`}
                        >
                          {item.price}
                        </div>
                        <div
                          className={`text-[10px] font-black uppercase ${
                            item.featured ? 'text-white/60' : 'text-zinc-400'
                          }`}
                        >
                          pagamento seguro
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <a
                href="https://shop.burblefresh.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-lime-300 px-8 py-5 text-sm font-black uppercase text-zinc-950 shadow-xl shadow-lime-300/30 transition hover:scale-[1.02] hover:bg-lime-200"
              >
                Comprar agora
              </a>

              <p className="mt-4 text-center text-xs font-bold text-zinc-500">
                Compra segura • Entrega rápida • Atendimento via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection