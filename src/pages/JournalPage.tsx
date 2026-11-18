import { Heading } from '@astryxdesign/core/Heading'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { Reveal } from '../components/motion/Reveal'

export function JournalPage() {
  return (
    <Section paddingBlock={8} paddingInline={4}>
      <Stack className="measure" direction="vertical" gap={5}>
        <Reveal>
          <Heading className="t-stagger-line t-stagger-line--1" level={1} type="display-2">
            Revista AIHC
          </Heading>
          <Text className="t-stagger-line t-stagger-line--2" color="secondary" as="p">
            Avances en Interacción Humano-Computadora. Acceso abierto, periodicidad anual, ISSN
            electrónico 2594-2352.
          </Text>
        </Reveal>
        <Text as="p">
          AIHC es una publicación científica mexicana de acceso abierto dedicada a la investigación
          en interacción humano-computadora. Inició en 2016 para visibilizar la producción
          académica de México e Iberoamérica. Se publica en formato digital y ofrece todos sus
          contenidos en acceso abierto.
        </Text>
        <Text as="p">
          La edita AMexIHC. En sus primeros números estuvo ligada a la comunidad de MexIHC y
          publicó memorias arbitradas del congreso. Opera con revisión por pares.
        </Text>
        <Stack direction="vertical" gap={1}>
          <Text weight="semibold">Dirección editorial</Text>
          <Text>Dr. Luis Adrián Castro Quiroa, Instituto Tecnológico de Sonora. Editor en jefe.</Text>
          <Text>Dr. Pedro C. Santana Mancilla, Universidad de Colima. Editor asociado.</Text>
        </Stack>
        <Text as="p">
          Publica sobre diseño centrado en el usuario, usabilidad, experiencia de usuario,
          accesibilidad, tecnologías emergentes, realidad aumentada y virtual, inteligencia
          artificial aplicada a interfaces, sistemas interactivos en educación y salud, y estudios
          sociales y metodológicos de la relación entre personas y tecnología. Incluye artículos
          de investigación, reportes técnicos, trabajos en progreso y números especiales de MexIHC.
        </Text>
      </Stack>
    </Section>
  )
}
