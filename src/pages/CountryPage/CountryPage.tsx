import { countriesApi } from 'api'
import { Container, CountryInfo, Header, ICountryInfo } from 'components'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './CountryPage.module.scss'

export const CountryPage: FC = (): JSX.Element => {
	const [country, setCountry] = useState<ICountryInfo | null>(null)
	const { name } = useParams()

	useEffect(() => {
		if (name) {
			countriesApi
				.getCountryByName(name, {
					fields:
						'name,population,tld,currencies,subregion,languages,borders,area,region,capital,flags'
				})
				.then(response => {
					setCountry(response.data[0])
				})
		}
	}, [name])

	return (
		<div className={classes.root}>
			<Header />
			<Container>{country !== null && <CountryInfo country={country} />}</Container>
		</div>
	)
}
