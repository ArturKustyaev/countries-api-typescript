import { createSlice } from '@reduxjs/toolkit'
import { ICountryCard } from 'components'
import { fetchCountries } from './thunkActions'

type StatusType = 'idle' | 'loading' | 'success' | 'error'

interface IInitialState {
	countries: ICountryCard[]
	status: StatusType
	errorMessage: string
}

const initialState: IInitialState = {
	countries: [],
	status: 'idle',
	errorMessage: ''
}

const filterSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCountries.pending, state => {
			state.status = 'loading'
			state.errorMessage = ''
		})
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			state.status = 'success'
			state.countries = action.payload
		})
		builder.addCase(fetchCountries.rejected, (state, action) => {
			state.status = 'error'
			state.errorMessage = action.payload || 'Ошибка загрузки!'
		})
	}
})

export default filterSlice.reducer
