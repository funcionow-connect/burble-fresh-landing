const testimonials = [
  {
    name: 'Marina Costa',
    handle: '@marinacorre',
    text: 'Senti diferença principalmente depois do treino. Antes eu ficava quebrada o resto do dia, agora consigo recuperar melhor.',
  },
  {
    name: 'Ana Luiza',
    handle: '@analu.fit',
    text: 'Gostei porque é prático. Coloco na garrafinha antes de ir treinar e o sabor é bem leve.',
  },
  {
    name: 'Camila Rocha',
    handle: '@camilatreina',
    text: 'Eu usava isotônico comum, mas queria algo sem açúcar. A Burble entrou fácil na minha rotina.',
  },
  {
    name: 'Fernanda Alves',
    handle: '@fer.alves',
    text: 'Uso principalmente em dias de corrida. Ajuda muito naquela sensação de pernas pesadas.',
  },
  {
    name: 'Juliana Martins',
    handle: '@jumartins',
    text: 'O que mais gostei foi a praticidade. Dá para levar na bolsa e preparar em qualquer lugar.',
  },
  {
    name: 'Bianca Ramos',
    handle: '@biancaramostreina',
    text: 'Depois que comecei a usar, percebi menos cansaço no pós-treino e mais disposição durante o dia.',
  },
]

function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white">
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-700/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 rounded-full bg-lime-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-lime-300 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            Mulheres reais
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
            O que elas estão dizendo sobre a Burble Fresh.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/70 md:text-base">
            Depoimentos temporários para estruturar a seção. Depois trocamos
            pelos relatos reais do cliente, fotos e arrobas corretos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="rounded-[1.7rem] bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-violet-400 text-lg font-black text-zinc-950">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-sm font-black text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs font-bold text-lime-300">
                    {testimonial.handle}
                  </p>
                </div>
              </div>

              <div className="mb-4 text-sm font-black text-lime-300">
                ★★★★★
              </div>

              <p className="text-sm font-medium leading-relaxed text-white/75">
                “{testimonial.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection