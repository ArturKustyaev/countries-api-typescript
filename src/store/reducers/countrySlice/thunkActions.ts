import { createAsyncThunk } from '@reduxjs/toolkit'
import { countriesApi, IFetchCountriesParams } from 'api'
import { ICountryCard } from 'components'
import { RootState } from 'store'

export const fetchCountries = createAsyncThunk<
	ICountryCard[],
	IFetchCountriesParams | undefined,
	{ rejectValue: string; state: RootState }
>('countries/fetchCountries', async (params = undefined, { rejectWithValue, getState }) => {
	try {
		let { data } = await countriesApi.fetchCountries(params)

		const region = getState().filter.region

		if (region !== 'all') {
			return data.filter(c => c.region.toLowerCase() === region.toLowerCase())
		}

		return data
	} catch (e) {
		return rejectWithValue(`Ошибка при загрузке стран! ${e}`)
	}
})
