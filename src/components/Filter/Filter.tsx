import { FilterContext } from 'context'
import { FC, useContext } from 'react'
import { FilterValueType, Input, Select } from 'ui-kit'
import classes from './Filter.module.scss'

export const Filter: FC = (): JSX.Element => {
	const { filter, setFilter } = useContext(FilterContext)

	const filterSelectHandler = (value: FilterValueType) => {
		setFilter(value)
	}

	return (
		<div className={classes.filter}>
			<div className={classes.inner}>
				<Input className={classes.input} placeholder='Seacrh a country' />
				<Select
					placeholder='Filter by region'
					onSelectItem={filterSelectHandler}
					defaultValue={filter}
				/>
			</div>
		</div>
	)
}
