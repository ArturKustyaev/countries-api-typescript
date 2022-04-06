import { Container, CountriesList, Filter, Header } from 'components'
import { FilterContext } from 'context'
import { FC, useState } from 'react'
import { FilterValueType } from 'ui-kit'

export const MainPage: FC = (): JSX.Element => {
	const [filter, setFilter] = useState<FilterValueType>('all')

	return (
		<div>
			<Header />
			<Container>
				<FilterContext.Provider value={{ filter, setFilter }}>
					<Filter />
					<CountriesList />
				</FilterContext.Provider>
			</Container>
		</div>
	)
}
