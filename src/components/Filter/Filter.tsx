import { useAppSelector } from 'hooks'
import { RegionType } from 'models'
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setRegion, setSearch } from 'store/reducers/filterSlice'
import { Input, OptionType, Select } from 'ui-kit'
import { useDebouncedCallback } from 'use-debounce'
import classes from './Filter.module.scss'

export const options: OptionType<RegionType>[] = [
	{
		label: 'All countries',
		value: 'all'
	},
	{
		label: 'Africa',
		value: 'africa'
	},
	{
		label: 'America',
		value: 'americas'
	},
	{
		label: 'Asia',
		value: 'asia'
	},
	{
		label: 'Europe',
		value: 'europe'
	},
	{
		label: 'Oceania',
		value: 'oceania'
	}
]

export const Filter: FC = (): JSX.Element => {
	const { q } = useAppSelector(state => state.filter)
	const [inputValue, setInputValue] = useState<string>(q)
	const dispatch = useDispatch()

	const debounceDispatch = useDebouncedCallback(() => {
		dispatch(setSearch(inputValue))
	}, 500)

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)

		debounceDispatch()
	}

	const selectHandler = (region: RegionType) => {
		dispatch(setRegion(region))
	}

	return (
		<div className={classes.root}>
			<div className={classes.inner}>
				<Input
					className={classes.input}
					placeholder='Seacrh a country'
					value={inputValue}
					onChange={inputHandler}
				/>
				<Select className={classes.select} placeholder='Filter by region' options={options} onSelectItem={selectHandler} />
			</div>
		</div>
	)
}
