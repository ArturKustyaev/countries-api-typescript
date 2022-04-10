import { countriesApi } from 'api'
import { Container, CountriesList, Filter, Header, ICountryCard } from 'components'
import { CountriesContext } from 'context'
import { FC, useContext, useEffect, useState } from 'react'

export const MainPage: FC = (): JSX.Element => {
	const { countries, setCountries } = useContext(CountriesContext)

	useEffect(() => {
		countriesApi.getCountries({ fields: 'name,population,region,capital,flags' }).then(response => {
			setCountries(response.data)
		})
	}, [])

	return (
		<div>
			<Header />
			<Container>
				{countries.length !== 0 && <CountriesList countries={countries} />}
			</Container>
		</div>
	)
}
