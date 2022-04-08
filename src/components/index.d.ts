export interface ICountryCard {
	capital: Array<string>
	flags: { svg: string }
	name: { common: string }
	population: number
	region: string
}

export interface ICountryInfo extends ICountryCard {
	name: {
		common: string
		official: string
	}
	tld: Array<string>
	currencies: {
		[key: string]: ICurrencies
	}
	subregion: string
	languages: {
		[key: string]: string
	}
	borders: Array<string>
	area: number
}

export interface ICurrencies {
	name: string
	symbol: string
}
