import axios from 'axios'

export const getFilms = (filmsAPI: any[]) => {
  const requests: any[] = []

  filmsAPI.forEach((filmAPI: string) => {
    requests.push(axios.get(filmAPI))
  })

  const response = axios
    .all(requests)
    .then(
      axios.spread((...args) => {
        const films = args.map((film) => {
          return film.data
        })
        return films
      })
    )
    .catch((error) => {
      console.log(error.message)
    })
  return response
}
