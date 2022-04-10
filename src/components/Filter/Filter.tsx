import { CountriesContext, FilterContext } from 'context'
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { FilterValueType, Input, Select } from 'ui-kit'
import classes from './Filter.module.scss'

interface Props {
	onSearch: (selectQuery: string, region: string) => void
}

export const Filter: FC<Props> = ({ onSearch }): JSX.Element => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [region, setRegion] = useState<FilterValueType>('all')

	useEffect(() => {
		onSearch(searchQuery, region)
	}, [searchQuery, region])

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	return (
		<div className={classes.filter}>
			<div className={classes.inner}>
				<Input
					className={classes.input}
					placeholder='Seacrh a country'
					value={searchQuery}
					onChange={inputHandler}
				/>
				<Select placeholder='Filter by region' onSelectItem={setRegion} />
			</div>
		</div>
	)
}
