import { Container } from 'components'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.inner}>
					<Link to={'/countries-api-typescript'} className={classes.logo}>
						Where in the world?
					</Link>
					{/* 	<div className={classes.themeMode}>Dark Mode</div> */}
				</div>
			</Container>
		</div>
	)
}
