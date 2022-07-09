import { CountryPage, MainPage } from 'pages'
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from './App.module.scss'

import { Provider } from 'react-redux'
import store from 'store'

export const App: FC = (): JSX.Element => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className={classes.App}>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/:name' element={<CountryPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	)
}
