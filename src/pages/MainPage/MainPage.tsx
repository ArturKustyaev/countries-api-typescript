import { Container, CountriesList, Filter, Header } from 'components'
import { FC } from 'react'

export const MainPage: FC = (): JSX.Element => {
	return (
		<div>
			<Header />
			<Container>
				<Filter />
				<CountriesList />
			</Container>
		</div>
	)
}
