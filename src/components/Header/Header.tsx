import { Container } from 'components'
import React, { FC } from 'react'
import classes from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
	return (
		<div className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<h1 className={classes.logo}>Where in the world?</h1>
					<div className={classes.themeMode}>Dark Mode</div>
				</div>
			</Container>
		</div>
	)
}
