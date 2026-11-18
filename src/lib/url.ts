const prefix = import.meta.env.BASE_URL.replace(/\/$/, '')

export const siteOrigin = 'https://amexihc.vercel.app'

export function toHref(path: string) {
  if (/^[a-z]+:/i.test(path)) return path
  if (path === '/') return prefix || '/'
  return `${prefix}${path}`
}

export function fromLocation(pathname: string) {
  let path = pathname
  if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
    path = path.slice(prefix.length) || '/'
  }
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path || '/'
}
