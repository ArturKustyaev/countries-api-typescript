import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RegionType } from 'models'

interface IInitialState {
	q: string
	region: RegionType
}

const initialState: IInitialState = {
	q: '',
	region: 'all'
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setRegion(state, action: PayloadAction<RegionType>) {
			state.region = action.payload
		},
		setSearch(state, action: PayloadAction<string>) {
			state.q = action.payload
		}
	}
})

export const { setSearch, setRegion } = filterSlice.actions

export default filterSlice.reducer
