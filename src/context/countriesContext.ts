import { ICountryCard } from 'components'
import { createContext } from 'react'

interface IUserContext {
	countries: Array<ICountryCard>
	setCountries: (users: Array<ICountryCard>) => void
}

const initialState: IUserContext = {
	countries: [],
	setCountries: () => {},
}

export const CountriesContext = createContext<IUserContext>(initialState)
