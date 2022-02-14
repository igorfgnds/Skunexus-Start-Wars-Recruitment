import axios from 'axios'

export const getResidents = (residentsAPI: any[]) => {
  const requests: any[] = []

  residentsAPI.forEach((residentAPI: string) => {
    requests.push(axios.get(residentAPI))
  })

  const response = axios
    .all(requests)
    .then(
      axios.spread((...args) => {
        const residents = args.map((resident) => {
          return resident.data
        })
        return residents
      })
    )
    .catch((error) => {
      console.log(error.message)
    })
  return response
}
