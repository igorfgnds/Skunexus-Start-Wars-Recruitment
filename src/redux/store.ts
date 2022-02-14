import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import planetsReducer from './Planets'
import filmsReducer from './Films'
import residentsReducer from './Residents'

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
    films: filmsReducer,
    residents: residentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload'],
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
