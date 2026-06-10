export default function Tribute() {
  return (
    <section className="bg-black px-6 py-24 text-center text-white sm:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/45">
          In Loving Memory
        </p>

        <img
          src="/images/tranqill-memory.jpeg"
          alt="Tranqill"
          className="mx-auto aspect-[4/5] w-full max-w-[360px] object-cover grayscale"
        />

        <h2 className="mt-10 text-4xl font-black uppercase tracking-[0.18em] sm:text-5xl">
          Tranqill
        </h2>

        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <img
            src="/logos/tranqill-circle.png"
            alt=""
            className="h-8 w-8 rounded-full opacity-70"
          />
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <div className="mx-auto mt-8 max-w-xl space-y-5 text-base leading-8 text-white/60 sm:text-lg">
          <p>This is for you.</p>
          <p>
            Your passion, your vision and your spirit live in everything we
            create.
          </p>
          <p>Without you, none of this exists.</p>
        </div>

        <p className="mt-8 text-lg text-white/45">♡</p>
      </div>
    </section>
  );
}
