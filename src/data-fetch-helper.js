import data from './data.json'

export async function getCarouselData() {
  // Fake endpoint call
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => data)
}
