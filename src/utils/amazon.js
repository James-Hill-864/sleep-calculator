const AMAZON_TAG = 'sleepcycler-20'

export function amazon(urlOrAsin) {
  if (!urlOrAsin) return ''

  if (urlOrAsin.startsWith('https://amzn.to/')) return urlOrAsin

  if (/^[A-Z0-9]{10}$/i.test(urlOrAsin)) {
    return `https://www.amazon.com/dp/${urlOrAsin}?tag=${AMAZON_TAG}`
  }

  try {
    const url = new URL(urlOrAsin)
    url.searchParams.set('tag', AMAZON_TAG)
    return url.toString()
  } catch {
    return urlOrAsin
  }
}
