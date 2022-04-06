import { Header } from 'components'
import { FC } from 'react'
import classes from './CountryPage.module.scss'

export const CountryPage: FC = (): JSX.Element => {
	return (
		<div>
			<Header />
			<div>Country page</div>
		</div>
	)
}
