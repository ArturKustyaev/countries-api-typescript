import classNames from 'classnames'
import { ICountryCard } from 'components'
import { FC, HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CountryCard.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	country: ICountryCard
}

export const CountryCard: FC<Props> = ({ className, country, ...rest }): JSX.Element => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate(`/${ country.name.common.toLowerCase()}`)
	}

	return (
		<div className={classNames(classes.countryCard, className)} onClick={clickHandler} {...rest}>
			<div className={classes.inner}>
				<img className={classes.flag} src={country.flags.svg} alt='flag' />
				<div className={classes.info}>
					<h4 className={classes.name}>{country.name.common}</h4>
					<p className={classes.stats}>
						Population: <span className={classes.value}>{country.population}</span>
					</p>
					<p className={classes.stats}>
						Region: <span className={classes.value}>{country.region}</span>
					</p>
					<p className={classes.stats}>
						Capital: <span className={classes.value}>{country.capital}</span>
					</p>
				</div>
			</div>
		</div>
	)
}
