import { CountriesApi } from 'api'
import { CountryCard, ICountryCard } from 'components'
import { CountriesContext, FilterContext } from 'context'
import { FC, useContext, useEffect } from 'react'
import classes from './CountryList.module.scss'

export const CountriesList: FC = (): JSX.Element => {
	const { countries, setCountries } = useContext(CountriesContext)
	const { filter } = useContext(FilterContext)

	useEffect(() => {
		CountriesApi.getCountries(filter, { fields: 'name,population,region,capital,flags' }).then(
			response => {
				setCountries(response.data)
			}
		)
	}, [filter])

	return (
		<div className={classes.countryList}>
			{countries.map((country: ICountryCard) => (
				<CountryCard className={classes.countryCard} key={country.name.common} country={country} />
			))}
		</div>
	)
}
