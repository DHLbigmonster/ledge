export const DOWNLOAD_LINK = 'https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg'
export const RELEASE_LINK = 'https://github.com/DHLbigmonster/ledge/releases/latest'
export const ISSUES_LINK = 'https://github.com/DHLbigmonster/ledge/issues/new/choose'
export const GITHUB_LINK = 'https://github.com/DHLbigmonster/ledge'

/**
 * Internal links use Vite's configured base. The canonical brand site is at
 * the root; VITE_BASE_PATH can still override it for deployment checks.
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
