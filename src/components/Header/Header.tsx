import { Container } from 'components'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
	return (
		<div className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<Link to={'/'} className={classes.logo}>
						Where in the world?
					</Link>

					<div className={classes.themeMode}>Dark Mode</div>
				</div>
			</Container>
		</div>
	)
}
