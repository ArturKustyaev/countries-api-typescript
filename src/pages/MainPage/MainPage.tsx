import { Container, CountriesList, Header } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks'
import { FC, useEffect } from 'react'
import { fetchCountries } from 'store/reducers/countrySlice'

export const MainPage: FC = (): JSX.Element => {
	const { q, region } = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCountries({ fields: 'name,population,region,capital,flags', query: q }))
	}, [q, region])

	return (
		<div>
			<Header />
			<Container>
				<CountriesList />
			</Container>
		</div>
	)
}
