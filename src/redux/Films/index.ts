import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store'
import { getFilms } from '../../services/Films'

export interface IFilms {
  films: any[]
  loading: boolean
}

const initialState: IFilms = {
  films: [],
  loading: true,
}

const films = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setResponse(state, action) {
      state.films = action.payload
      state.loading = false
    },
  },
})

export const { setResponse } = films.actions

export function fetchFilms(filmsAPI: any[]): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await getFilms(filmsAPI)
    dispatch(setResponse(response))
  }
}

export default films.reducer
