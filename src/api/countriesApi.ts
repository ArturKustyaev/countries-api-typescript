import { ICountryInfo } from 'components'
import axios, { AxiosResponse } from 'axios'
import { ICountryCard } from 'components'

interface IParams {
	[key: string]: string
}

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/',
	timeout: 10000
})

export const CountriesApi = {
	getCountries: (
		region: string = 'all',
		params?: IParams
	): Promise<AxiosResponse<Array<ICountryCard>>> => {
		const request = region !== 'all' ? 'region/' + region : region

		return instance.get(request, {
			params: {
				...params
			}
		})
	},
	getCountryByName: (
		country: string,
		params?: IParams
	): Promise<AxiosResponse<Array<ICountryInfo>>> => {
		return instance.get(`/name/${country}`, {
			params: {
				...params
			}
		})
	},
	getCountriesByAlfaCode: (alfaCodesArray: Array<string>, params?: IParams): Promise<AxiosResponse<Array<ICountryInfo>>> => {
		return instance.get('/alpha', {
			params: {
				...params,
				codes: alfaCodesArray.join(',')
			}
		})
	} 
}
