import axios, { AxiosResponse } from 'axios'
import { ICountryCard } from 'components'

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/',
	timeout: 10000
})

export const CountriesApi = {
	fetchCountryCards: (region: string = 'all'): Promise<AxiosResponse<Array<ICountryCard>>> => {
		const request = region !== 'all' ? 'region/' + region : region
		
		return instance.get(request, {
			params: {
				fields: 'name,population,region,capital,flags'
			}
		})
	}
}
