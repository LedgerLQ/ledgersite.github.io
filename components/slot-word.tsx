"use client"

import { useEffect, useState } from "react"

const WORDS = ["Ledger", "Bitbox", "Larping", "Geil", "LQ", "Glegg", "Peter", "VibeCoding", "Gaming Geil"]
const FINAL_WORD = "LedgerLQ"

export function SlotWord() {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let delay = 80
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      i += 1
      setIndex(i % WORDS.length)

      // Slow down progressively to simulate a slot machine settling.
      if (delay < 600) {
        delay *= 1.18
      }

      // Once slow enough, land on the final word and stop.
      if (delay >= 600) {
        setDone(true)
        return
      }

      timeout = setTimeout(tick, delay)
    }

    timeout = setTimeout(tick, delay)
    return () => clearTimeout(timeout)
  }, [])

  const word = done ? FINAL_WORD : WORDS[index]

  return (
    <span
      key={word}
      className="inline-block animate-[slotpop_220ms_ease-out] font-semibold text-white"
      style={{ textShadow: "0 0 16px rgba(255,255,255,0.6)" }}
    >
      {word}
    </span>
  )
}
