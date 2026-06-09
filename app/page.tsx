import { Starfield } from "@/components/starfield"
import { SlotWord } from "@/components/slot-word"

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6">
      <Starfield />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1
          className="font-[family-name:var(--font-display)] text-balance text-7xl font-bold leading-none tracking-[-0.04em] text-white sm:text-8xl md:text-9xl"
          style={{ textShadow: "0 0 24px rgba(255,255,255,0.5), 0 0 64px rgba(255,255,255,0.25)" }}
        >
          Ledger
        </h1>

        <p
          className="mt-6 font-[family-name:var(--font-display)] text-lg font-normal lowercase tracking-tight text-white/60 sm:text-xl md:text-2xl"
          style={{ textShadow: "0 0 18px rgba(255,255,255,0.25)" }}
        >
          geiles <SlotWord /> man
        </p>
      </div>
    </main>
  )
}
