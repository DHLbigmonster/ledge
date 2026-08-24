import { sitePath } from '../site'

export default function BeautifyShowcaseImage({
  alt,
  loading = 'lazy',
  className,
}: {
  alt: string
  loading?: 'eager' | 'lazy'
  className?: string
}) {
  const set = (format: 'avif' | 'webp') => [700, 1050, 1400]
    .map((width) => `${sitePath(`/beautify-current-${width}.${format}`)} ${width}w`)
    .join(', ')

  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes="(max-width: 768px) calc(100vw - 48px), 1024px" />
      <source type="image/webp" srcSet={set('webp')} sizes="(max-width: 768px) calc(100vw - 48px), 1024px" />
      <img
        src={sitePath('/beautify-current.jpg')}
        alt={alt}
        width={2100}
        height={900}
        loading={loading}
        className={className}
      />
    </picture>
  )
}
