import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store'
import { getPlanets } from '../../services/Planets'

export interface IPlanets {
  planets: any[]
  loading: boolean
  nextPageAPI: string
  prevPageAPI: string
}

const initialState: IPlanets = {
  planets: [],
  loading: true,
  nextPageAPI: '',
  prevPageAPI: '',
}

const planets = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setResponse(state, action) {
      state.planets = action.payload.data.results
      state.nextPageAPI = action.payload.data.next
      state.prevPageAPI = action.payload.data.previous
      state.loading = false
    },
    setLoading(state) {
      state.loading = true
    },
  },
})

export const { setResponse, setLoading } = planets.actions

export function fetchPlanets(planetsAPI: string): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(setLoading())
    const response = await getPlanets(planetsAPI)
    dispatch(setResponse(response))
  }
}

export default planets.reducer
