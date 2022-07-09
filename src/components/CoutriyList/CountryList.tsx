import { CountryCard, CountryCardSkeleton, Filter } from 'components'
import { useAppSelector } from 'hooks'
import { FC } from 'react'
import classes from './CountryList.module.scss'

export const CountriesList: FC = (): JSX.Element => {
	const { countries, status, errorMessage } = useAppSelector(state => state.countries)

	return (
		<div className={classes.countryListWrapper}>
			<Filter />
			{errorMessage && <div className={classes.error_message}>{errorMessage}</div>}
			<div className={classes.countryList}>
				{status === 'loading' &&
					Array(8)
						.fill(0)
						.map((_, index) => <CountryCardSkeleton className={classes.countryCard} key={index} />)}
				{status === 'success' &&
					countries.map(country => (
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
