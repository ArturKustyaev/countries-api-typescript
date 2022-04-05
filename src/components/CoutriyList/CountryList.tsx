import { CountriesApi } from 'api'
import { Container, CountryCard, ICountryCard } from 'components'
import { FC, useEffect, useState } from 'react'
import classes from './CountryList.module.scss'

export const CountriesList: FC = (): JSX.Element => {
	const [countries, setCountries] = useState<Array<ICountryCard>>([])

	useEffect(() => {
		CountriesApi.fetchCountryCards().then(response => {
			setCountries(response.data)
		})
	}, [])

	return (
		<div className={classes.countryList}>
			{countries.map((country: ICountryCard) => (
				<CountryCard className={classes.countryCard} key={country.name.common} country={country} />
			))}
		</div>
	)
}
