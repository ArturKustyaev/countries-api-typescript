import { MainPage } from 'pages'
import { FC } from 'react'
import classes from './App.module.scss'

export const App: FC = (): JSX.Element => {
	return (
		<div className={classes.App}>
			<MainPage />
		</div>
	)
}
