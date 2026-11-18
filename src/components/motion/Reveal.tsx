import { useEffect, useRef, type ReactNode } from 'react'
import { Stack } from '@astryxdesign/core/Stack'

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const block = ref.current
    if (!block) return
    block.classList.remove('is-hiding')
    block.classList.remove('is-shown')
    void block.offsetHeight
    block.classList.add('is-shown')
  }, [])

  return (
    <Stack ref={ref} className="t-stagger" direction="vertical" gap={6}>
      {children}
    </Stack>
  )
}
