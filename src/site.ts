export const DOWNLOAD_LINK = 'https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg'
export const RELEASE_LINK = 'https://github.com/DHLbigmonster/ledge/releases/latest'
export const ISSUES_LINK = 'https://github.com/DHLbigmonster/ledge/issues/new/choose'
export const GITHUB_LINK = 'https://github.com/DHLbigmonster/ledge'

/**
 * Internal links must work both on the current GitHub Pages subdirectory and
 * on the future custom-domain root. VITE_BASE_PATH controls Vite's BASE_URL.
 */
export function sitePath(path: string): string {
  if (/^(?:https?:|mailto:|#)/.test(path)) return path
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
  const relative = path.replace(/^\/+/, '')
  return relative ? `${base}${relative}` : base
}

export function goatEvent(name: string) {
  return {
    'data-goatcounter-click': name,
    'data-goatcounter-title': name,
  }
}
