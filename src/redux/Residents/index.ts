import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '../store'
import { getResidents } from '../../services/Residents'

export interface IResidents {
  residents: any[]
  loading: boolean
}

const initialState: IResidents = {
  residents: [],
  loading: false,
}

const residents = createSlice({
  name: 'residents',
  initialState,
  reducers: {
    setResponse(state, action) {
      state.residents = action.payload
      state.loading = false
    },
  },
})

export const { setResponse } = residents.actions

export function fetchResidents(residentsAPI: any[]): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await getResidents(residentsAPI)
    dispatch(setResponse(response))
  }
}

export default residents.reducer
