import axios from 'axios'

export const getPlanets = (planetsAPI: string) => {
  const response = axios.get(`${planetsAPI}`).catch((error) => {
    console.log(error.message)
  })
  return response
}
