import { CountryCard, Filter, ICountryCard } from 'components'
import { FC, useState } from 'react'
import classes from './CountryList.module.scss'

interface Props {
	countries: Array<ICountryCard>
}

export const CountriesList: FC<Props> = ({ countries }): JSX.Element => {
	const [filteredCountries, setFilteredCountries] = useState<Array<ICountryCard>>(countries)
	
	const handleSearch = (searchQuery: string, region: string) => {
		let data = [...countries]

		if (region && region !== 'all') {
			data = data.filter(country => country.region.toLowerCase().includes(region))
		}

		if (searchQuery) {
			data = data.filter(country => country.name.common.toLowerCase().includes(searchQuery))
		}
		
		setFilteredCountries(data)
	}

	return (
		<div className={classes.countryListWrapper}>
			<Filter onSearch={handleSearch} />
			<div className={classes.countryList}>
				{filteredCountries.map(country => (
					<CountryCard
						className={classes.countryCard}
						key={country.name.common}
						country={country}
					/>
				))}
			</div>
		</div>
	)
}
