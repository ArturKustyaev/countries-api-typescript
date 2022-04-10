import { countriesApi } from 'api'
import classNames from 'classnames'
import { ICountryInfo, ICurrencies } from 'components'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './CountryInfo.module.scss'

interface Props {
	country: ICountryInfo
}

const placeObjectFieldsInArray = (object: object): Array<string> => {
	let array: Array<string> = []

	if (object) {
		Object.entries(object).forEach(([, value]) => array.push(value))
	}

	return array
}

const getFormattedCurrencies = (currencies: object): Array<string> => {
	let array: Array<string> = []
	Object.entries(currencies).forEach(([, currency]: [string, ICurrencies]) => {
		array.push(currency.name)
	})
	return array
}

export const CountryInfo: FC<Props> = ({ country }): JSX.Element => {
	console.log(country)
	const [borderCounries, setBorderCountries] = useState<Array<ICountryInfo>>([])
	const languages: Array<string> = placeObjectFieldsInArray(country.languages)
	const currencies = getFormattedCurrencies(country.currencies)

	useEffect(() => {
		countriesApi.getCountriesByAlfaCode(country.borders, { fields: 'name' }).then(response => {
			setBorderCountries(response.data)
		})
	}, [country])

	return (
		<div className={classes.root}>
			<img src={country.flags.svg} alt={`flag: ${country.name.common}`} className={classes.flag} />
			<div className={classes.info}>
				<h2 className={classes.name}>{country.name.common}</h2>
				<div className={classes.stats}>
					<div className={classes.stats_col}>
						<div className={classes.stats_row}>
							<span className={classes.description}>Native Name:</span>
							<span className={classes.value}>{country.name.official}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Population:</span>
							<span className={classes.value}>{country.population}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Region:</span>
							<span className={classes.value}>{country.region}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Sub Region:</span>
							<span className={classes.value}>{country.subregion}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Capital:</span>
							<span className={classes.value}>{country.capital}</span>
						</div>
					</div>
					<div className={classes.stats_col}>
						<div className={classes.stats_row}>
							<span className={classes.description}>Top Level Domain:</span>
							<span className={classes.value}>{country.tld.join(', ')}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Currencies:</span>
							<span className={classes.value}>{currencies.join(', ')}</span>
						</div>
						<div className={classes.stats_row}>
							<span className={classes.description}>Languages:</span>
							<span className={classes.value}>{languages.join(', ')}</span>
						</div>
					</div>
				</div>
				<div className={classes.border_countries}>
					<span className={classNames(classes.description, classes.descriptionBorderCountries)}>
						Border Countries:
					</span>
					<div className={classes.borderCountriesWrapper}>
						{country.borders.length !== 0 ? (
							borderCounries.map(borderCountry => (
								<Link
									className={classes.buttonBorderCountry}
									key={borderCountry.name.common}
									to={`/${borderCountry.name.common.toLowerCase()}`}
								>
									{borderCountry.name.common}
								</Link>
							))
						) : (
							<span className={classes.valueBorderCountries}>No border countries</span>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
