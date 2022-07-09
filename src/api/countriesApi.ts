import { ICountryInfo } from 'components'
import axios, { AxiosResponse } from 'axios'
import { ICountryCard } from 'components'

export interface IResponseParams {
	[key: string]: string
}

export interface IFetchCountriesParams {
	query: string
	fields?: string
}

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/',
	timeout: 10000
})

export const countriesApi = {
	fetchCountries: (params?: IFetchCountriesParams): Promise<AxiosResponse<ICountryCard[]>> => {
		if (params?.query) {
			return instance.get(`name/${params.query}`)
		}

		return instance.get('all')
	},
	getCountryByName: (
		country: string,
		params?: IResponseParams
	): Promise<AxiosResponse<Array<ICountryInfo>>> => {
		return instance.get(`name/${country}`, {
			params: {
				...params,
				fullText: true
			}
		})
	},
	getCountriesByAlfaCode: (
		alfaCodesArray: Array<string>,
		params?: IResponseParams
	): Promise<AxiosResponse<Array<ICountryInfo>>> => {
		return instance.get('alpha', {
			params: {
				...params,
				codes: alfaCodesArray.join(',')
			}
		})
	}
}
