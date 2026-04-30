const videos = [
  {
    src: 'https://shop.burblefresh.com.br/videos/letzrun-preview-1.mp4',
    poster: 'https://shop.burblefresh.com.br/assets/letzrun-video-1-DTYwi88S.webp',
    className: 'col-span-2 aspect-[16/9]',
  },
  {
    src: 'https://shop.burblefresh.com.br/videos/letzrun-preview-2.mp4',
    poster: 'https://shop.burblefresh.com.br/assets/letzrun-video-2-JLjdz4XF.webp',
    className: 'aspect-square',
  },
  {
    src: 'https://shop.burblefresh.com.br/videos/letzrun-preview-3.mp4',
    poster: 'https://shop.burblefresh.com.br/assets/letzrun-video-3-BbwxoDRf.webp',
    className: 'aspect-square',
  },
]

const stats = [
  {
    value: '98%',
    text: 'amaram o sabor.',
  },
  {
    value: '86%',
    text: 'melhoraram a recuperação.',
  },
  {
    value: '84%',
    text: 'melhoraram o desempenho físico.',
  },
]

function EventProofSection() {
  return (
    <section
      id="estudo-letzrun"
      translate="no"
      className="notranslate relative overflow-hidden bg-white px-5 py-12 sm:py-20"
    >
      <div className="relative mx-auto max-w-[680px]">
        <div className="mb-6 text-center sm:mb-8">
          <div className="mb-2 flex justify-center sm:mb-3">
            <span className="inline-flex h-[30px] w-4 items-center justify-center text-2xl font-black text-lime-300">
              ⋮
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#faf9fb] px-3 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-zinc-700 sm:px-4 sm:text-[0.75rem]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(199,255,5,0.7)]" />
            Letz Run Girls
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-[520px] sm:mb-10">
          <div className="grid grid-cols-2 gap-1.5 overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_-22px_rgba(108,75,200,0.35)]">
            {videos.map((video) => (
              <div
                key={video.src}
                className={`relative overflow-hidden ${video.className}`}
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full select-none object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 text-center sm:mb-10">
          <h2 className="mb-3 text-center text-xl font-extrabold leading-[1.15] tracking-[-0.02em] text-zinc-900">
            <span className="text-zinc-900">
              <span className="tabular-nums text-[1.7rem] font-extrabold leading-none text-violet-800 sm:text-[2.1rem]">
                1.598
              </span>{' '}
              corredoras
            </span>{' '}
            <span className="rounded-sm bg-lime-300/30 px-1.5 text-violet-800">
              aprovaram
            </span>{' '}
            <span className="text-zinc-900">Burble Fresh</span>
          </h2>

          <p className="mx-auto max-w-[480px] text-[0.95rem] leading-[1.6] text-zinc-700 sm:text-[1.05rem]">
            Resultados percebidos pelas corredoras que experimentaram{' '}
            <b>Burble Fresh</b> antes, durante e depois da prova.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="rounded-2xl border border-zinc-100 bg-[#faf9fb] p-5 text-center shadow-[0_6px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="text-[1.8rem] font-extrabold leading-none text-violet-800 sm:text-[2rem]">
                {stat.value}
              </div>

              <p className="mt-2 text-[0.78rem] font-bold uppercase leading-snug text-zinc-600 sm:text-[0.82rem]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[560px] rounded-r-xl border-l-4 border-lime-300 bg-lime-50 p-3 sm:mt-10 sm:p-4">
          <p className="text-[0.85rem] font-semibold leading-[1.65] text-zinc-900 sm:text-[0.95rem]">
            Prova social real para reforçar confiança, comunidade e percepção de
            resultado no uso da Burble Fresh.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EventProofSection