# AMexIHC

Sitio público de la Asociación Mexicana de Interacción Humano-Computadora.

## Información

Los textos, las mesas directivas, el ISSN de la revista y los enlaces salen del sitio vigente:

- [amexihc.org](https://amexihc.org/)
- [Mesa directiva](https://amexihc.org/mesa-directiva/)
- [Nuestras iniciativas](https://amexihc.org/nuestras-iniciativas/)
- [MexIHC](https://amexihc.org/mexihc/)
- [Revista AIHC](https://amexihc.org/revista-aihc/)

El wordmark es el logotipo publicado en ese sitio. La versión del repositorio es un trazado vectorial de ese archivo. Facebook y X apuntan a las cuentas enlazadas desde la página original. Los iconos del sitio son SVG guardados en el repositorio.

## Stack

- [Vite](https://vite.dev/) y TypeScript
- [React](https://react.dev/)
- [Astryx](https://astryx.atmeta.com/) (`@astryxdesign/core`, tema que extiende `theme-neutral`)
- [transitions.dev](https://transitions.dev/) para revelado de texto, pestañas, menú e iconos

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

El sitio se publica en [isaimorenolara.github.io/amexihc](https://isaimorenolara.github.io/amexihc/). El workflow de GitHub Actions construye con la base `/amexihc/` y copia `index.html` a `404.html` para que las rutas del cliente sigan funcionando al recargar.

En local, `npm run dev` sigue sirviendo la raíz `/`.

## Estructura

```text
amexihc-web
├── index.html
├── .github/workflows/pages.yml
├── public
│   ├── robots.txt
│   ├── sitemap.xml
│   └── brand
│       ├── icon.svg
│       ├── apple-touch-icon.png
│       ├── logo.svg
│       ├── logo.png
│       ├── og.svg
│       └── og.png
└── src
    ├── main.tsx
    ├── app
    │   └── App.tsx
    ├── content
    │   └── site.ts
    ├── lib
    │   └── url.ts
    ├── theme
    │   └── apple.ts
    ├── pages
    │   ├── HomePage.tsx
    │   ├── BoardPage.tsx
    │   ├── InitiativesPage.tsx
    │   ├── MexihcPage.tsx
    │   └── JournalPage.tsx
    ├── components
    │   ├── icons
    │   ├── layout
    │   └── motion
    └── styles
        ├── site.css
        └── motion.css
```

`src/content/site.ts` concentra la navegación y las mesas. `src/theme/apple.ts` define los tokens de color, tipo y radio.
