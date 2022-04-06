import { ICountryCard } from 'components'
import { CountriesContext } from 'context'
import { CountryPage, MainPage } from 'pages'
import { FC, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from './App.module.scss'

export const App: FC = (): JSX.Element => {
	const [countries, setCountries] = useState<Array<ICountryCard>>([])

	return (
		<CountriesContext.Provider value={{ countries, setCountries }}>
			<BrowserRouter>
				<div className={classes.App}>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/:name' element={<CountryPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</CountriesContext.Provider>
	)
}
