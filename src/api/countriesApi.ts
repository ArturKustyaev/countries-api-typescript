import axios, { AxiosResponse } from 'axios'
import { ICountryCard } from 'components'

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/',
	timeout: 1000
})

export const CountriesApi = {
	fetchCountryCards: (): Promise<AxiosResponse<Array<ICountryCard>>> => {
		return instance.get('all', {
			params: {
				fields: 'name,population,region,capital,flags'
			}
		})
	}
}
