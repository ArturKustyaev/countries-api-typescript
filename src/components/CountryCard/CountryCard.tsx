import classNames from 'classnames'
import { ICountryCard } from 'components'
import { FC, HTMLAttributes, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CountryCardSkeleton } from 'components'
import classes from './CountryCard.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	country: ICountryCard
}

export const CountryCard: FC<Props> = ({ className, country, ...rest }): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate(`/countries-api-typescript/${country.name.common.toLowerCase()}`)
	}

	const imgLoaded = () => {
		setIsLoading(false)
	}

	return (
		<div className={classNames(classes.root, className)} onClick={clickHandler} {...rest}>
			<div className={classes.inner}>
				{isLoading && <CountryCardSkeleton className={classes.flag_skeleton} />}
				<img
					className={classNames(classes.flag, {
						[classes.flag__hide]: isLoading
					})}
					src={country.flags.svg}
					alt='flag'
					onLoad={imgLoaded}
				/>
				<div className={classes.info}>
					<h4 className={classes.name}>{country.name.common}</h4>
					<p className={classes.stats}>
						Population:
						<span className={classes.value}>{country.population.toLocaleString('ru')}</span>
					</p>
					<p className={classes.stats}>
						Region:
						<span className={classes.value}>{country.region}</span>
					</p>
					<p className={classes.stats}>
						Capital:
						<span className={classes.value}>{country.capital}</span>
					</p>
				</div>
			</div>
		</div>
	)
}
