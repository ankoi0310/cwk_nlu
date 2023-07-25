import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AuthSlice } from 'redux/store/features/authSlice'
import { SubjectSlice } from 'redux/store/features/subjectSlice'
import { UserSlice } from 'redux/store/features/userSlice'
import { TranscriptSlice } from 'redux/store/features/transcriptSlice'
import { WebSlice } from 'redux/store/features/webSlice'
import { ScheduleSlice } from 'redux/store/features/scheduleSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  subject: SubjectSlice.reducer,
  user: UserSlice.reducer,
  transcript: TranscriptSlice.reducer,
  web: WebSlice.reducer,
  schedule: ScheduleSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
