import { FC, useState } from 'react'
import { FilterValueType, Input, Select } from 'ui-kit'
import classes from './Filter.module.scss'

export const Filter: FC = (): JSX.Element => {
	const [filter, setFilter] = useState<FilterValueType | null>(null)

	const filterSelectHandler = (value: FilterValueType) => {
		setFilter(value)
		console.log(filter)
	}

	return (
		<div className={classes.filter}>
			<div className={classes.inner}>
				<Input className={classes.input} placeholder='Seacrh a country' />
				<Select onSelectItem={filterSelectHandler} />
			</div>
		</div>
	)
}
