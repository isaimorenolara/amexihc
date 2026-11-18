import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import type { BoardPeriod } from '../../content/site'
import { MemberList } from '../layout/MemberList'

export function PeriodTabs({ periods }: { periods: BoardPeriod[] }) {
  const [index, setIndex] = useState(periods.length - 1)
  const pillRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const hasPositioned = useRef(false)

  const moveTo = (tab: HTMLButtonElement, animate: boolean) => {
    const pill = pillRef.current
    if (!pill) return
    if (!animate) {
      const prev = pill.style.transition
      pill.style.transition = 'none'
      pill.style.transform = `translateX(${tab.offsetLeft}px)`
      pill.style.width = `${tab.offsetWidth}px`
      void pill.offsetWidth
      pill.style.transition = prev
    } else {
      pill.style.transform = `translateX(${tab.offsetLeft}px)`
      pill.style.width = `${tab.offsetWidth}px`
    }
  }

  useLayoutEffect(() => {
    const tab = tabRefs.current[index]
    if (!tab) return
    moveTo(tab, hasPositioned.current)
    hasPositioned.current = true
  }, [index])

  useEffect(() => {
    const onResize = () => {
      const tab = tabRefs.current[index]
      if (tab) moveTo(tab, false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [index])

  const period = periods[index]

  return (
    <Stack direction="vertical" gap={4}>
      <div className="t-tabs" role="tablist" aria-label="Periodos del consejo directivo">
        <div className="t-tabs-pill" ref={pillRef} />
        {periods.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            className="t-tab"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={itemIndex === index}
            aria-controls={`panel-${item.id}`}
            ref={(node) => {
              tabRefs.current[itemIndex] = node
            }}
            onClick={() => setIndex(itemIndex)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${period.id}`} aria-labelledby={`tab-${period.id}`}>
        <Stack direction="vertical" gap={4}>
          <Text color="secondary">{period.summary}</Text>
          <MemberList members={period.members} />
        </Stack>
      </div>
    </Stack>
  )
}
