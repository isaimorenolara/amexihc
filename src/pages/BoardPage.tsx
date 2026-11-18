import { Heading } from '@astryxdesign/core/Heading'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { boards } from '../content/site'
import { PeriodTabs } from '../components/motion/PeriodTabs'
import { Reveal } from '../components/motion/Reveal'

export function BoardPage() {
  return (
    <Section paddingBlock={8} paddingInline={4}>
      <Stack className="measure" direction="vertical" gap={6}>
        <Reveal>
          <Heading className="t-stagger-line t-stagger-line--1" level={1} type="display-2">
            Consejo directivo
          </Heading>
          <Text className="t-stagger-line t-stagger-line--2" color="secondary" as="p">
            El Consejo Directivo de AMexIHC está conformado por la presidencia, la secretaría, la
            tesorería, una comisaría y una vocalía.
          </Text>
        </Reveal>
        <PeriodTabs periods={boards} />
      </Stack>
    </Section>
  )
}
