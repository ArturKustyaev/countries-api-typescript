import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { countrySlice, filterSlice } from './reducers'

const rootReducer = combineReducers({
	countries: countrySlice,
	filter: filterSlice
})

const persistConfig = {
	key: 'countries',
	storage,
	blacklist: ['countries', 'filter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
