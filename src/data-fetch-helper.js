export async function getCarouselData() {
  return fetch('./data.json')
    .then(async (data) => {
      return await data.json()
    })
    .catch(() => alert('An error occurs when trying to fetch'))
}
