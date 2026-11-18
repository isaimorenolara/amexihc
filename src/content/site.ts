export type Member = {
  role: string
  name: string
  org?: string
}

export type BoardPeriod = {
  id: string
  label: string
  summary: string
  members: Member[]
}

export const nav = [
  { href: '/', label: 'Acerca de' },
  { href: '/mesa-directiva', label: 'Consejo' },
  { href: '/nuestras-iniciativas', label: 'Iniciativas' },
  { href: '/mexihc', label: 'MexIHC' },
  { href: '/revista-aihc', label: 'Revista' },
] as const

export const boards: BoardPeriod[] = [
  {
    id: '2011',
    label: '2011',
    summary:
      'Primera mesa directiva, al constituirse la Asociación el 17 de diciembre de 2011 en Soledad de Graciano Sánchez, San Luis Potosí, ante el notario público número 23.',
    members: [
      { role: 'Presidente', name: 'Dr. Eduardo H. Calvillo Gámez' },
      { role: 'Secretario', name: 'Dr. Alfredo Sánchez Huitrón' },
      { role: 'Tesorero', name: 'Dr. Víctor M. González y González' },
      { role: 'Vocal', name: 'Dr. Erick López Ornelas' },
      { role: 'Comisario', name: 'M.C. Cuauhtémoc Rivera Loaiza' },
    ],
  },
  {
    id: '2013',
    label: '2013–2021',
    summary:
      'En este periodo se consolidó la continuidad del congreso, se fortaleció la revista científica y se amplió la participación nacional e internacional de la comunidad mexicana de IHC.',
    members: [
      {
        role: 'Presidente',
        name: 'Dr. Luis A. Castro',
        org: 'Instituto Tecnológico de Sonora',
      },
      {
        role: 'Secretaria',
        name: 'Dra. Marcela D. Rodríguez',
        org: 'Universidad Autónoma de Baja California',
      },
      {
        role: 'Tesorero',
        name: 'Mtro. Mario Moreno',
        org: 'Universidad Tecnológica de la Mixteca',
      },
      {
        role: 'Vocal',
        name: 'Mtro. Pedro C. Santana',
        org: 'Universidad de Colima',
      },
      { role: 'Comisaria', name: 'Dra. Mónica Tentori', org: 'CICESE' },
    ],
  },
  {
    id: 'actual',
    label: 'Actual',
    summary: 'Consejo directivo en funciones.',
    members: [
      {
        role: 'Presidente',
        name: 'Dr. Pedro César Santana Mancilla',
        org: 'Universidad de Colima',
      },
      {
        role: 'Secretaria',
        name: 'Dra. Laura Sanely Gaytán Lugo',
        org: 'Universidad de Colima',
      },
      {
        role: 'Tesorero',
        name: 'Dr. Luis A. Castro',
        org: 'Instituto Tecnológico de Sonora',
      },
      {
        role: 'Comisaria',
        name: 'Dra. Lizbeth Olivia Escobedo Bravo',
        org: 'Dalhousie University',
      },
      { role: 'Vocal', name: 'Dr. Cuauhtémoc Rivera Loaiza' },
    ],
  },
]

export const currentBoard = boards[2]
