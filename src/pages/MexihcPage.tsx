import { Heading } from '@astryxdesign/core/Heading'
import { Link } from '@astryxdesign/core/Link'
import { Section } from '@astryxdesign/core/Section'
import { Stack } from '@astryxdesign/core/Stack'
import { Text } from '@astryxdesign/core/Text'
import { Reveal } from '../components/motion/Reveal'

export function MexihcPage() {
  return (
    <Section paddingBlock={8} paddingInline={4}>
      <Stack className="measure" direction="vertical" gap={5}>
        <Reveal>
          <Heading className="t-stagger-line t-stagger-line--1" level={1} type="display-2">
            MexIHC
          </Heading>
          <Text className="t-stagger-line t-stagger-line--2" color="secondary" as="p">
            Conferencia Internacional Mexicana de Interacción Humano-Computadora.
          </Text>
        </Reveal>
        <Text as="p">
          MexIHC es el principal foro académico y profesional en México para presentar y discutir
          avances en interacción humano-computadora. Lo organizan AMexIHC y el capítulo mexicano de
          ACM SIGCHI. Se celebra de forma bienal desde mediados de la década de 2000, alternando
          con la Conferencia Latinoamericana de Interacción Humano-Computadora (CLIHC).
        </Text>
        <Text as="p">
          El congreso facilita el intercambio entre investigadores, académicos, estudiantes y
          profesionales de IHC y usabilidad, y promueve la aplicación de esos avances en industria,
          educación, videojuegos, aplicaciones móviles y otros ámbitos. Recibe artículos revisados
          por pares, estudios de caso, talleres, concursos de diseño estudiantil y presentaciones
          magistrales.
        </Text>
        <Text as="p">
          Sus primeras ediciones se celebraron en ciudades como Puebla, Colima, Mérida y Oaxaca.
          En MexIHC 2021 y MexIHC 2022, además de las sesiones presenciales, se incorporaron
          formatos virtuales y ponentes de universidades de otros países.
        </Text>
        <Link href="http://www.mexihc.org" isExternalLink>
          Sitio del congreso
        </Link>
      </Stack>
    </Section>
  )
}
