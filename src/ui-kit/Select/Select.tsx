import classNames from 'classnames'
import { FC, HTMLAttributes, useState } from 'react'
import classes from './Select.module.scss'

export type FilterValueType = 'africa' | 'america' | 'asia' | 'europe' | 'oceania'

interface IFilterItem {
	text: string
	value: FilterValueType
}

export const orderFields: Array<IFilterItem> = [
	{
		text: 'Africa',
		value: 'africa'
	},
	{
		text: 'America',
		value: 'america'
	},
	{
		text: 'Asia',
		value: 'asia'
	},
	{
		text: 'Europe',
		value: 'europe'
	},
	{
		text: 'Oceania',
		value: 'oceania'
	}
]

interface Props extends HTMLAttributes<HTMLSelectElement> {
	items?: Array<IFilterItem>
	onSelectItem: (value: FilterValueType) => void
}

export const Select: FC<Props> = ({ items = orderFields, onSelectItem, ...rest }): JSX.Element => {
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

	const innerStyles = classNames(classes.inner, {
		[classes.inner_active]: isDropdownVisible
	})

	const dropdownStyles = classNames(classes.dropdown, {
		[classes.dropdown_active]: isDropdownVisible
	})
	
	const setDefaultValue = (): number => {
		return rest.defaultValue ? items.findIndex(item => item.value === rest.defaultValue) : -1
	}

	const [selectedIndex, setSelectedIndex] = useState<number>(setDefaultValue())

	const clickHandler = (index: number) => {
		onSelectItem(items[index].value)
		setSelectedIndex(index)
		closeHandler()
	}

	const closeHandler = () => {
		setIsDropdownVisible(false)
	}

	return (
		<div className={classes.select} tabIndex={3} onBlur={closeHandler}>
			<div className={innerStyles} onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
				{selectedIndex !== -1 ? (
					items[selectedIndex].text
				) : (
					<span className={classes.placeholder}>Filter by region</span>
				)}
			</div>
			<ul className={dropdownStyles}>
				{items.map((item, index) => (
					<li className={classes.item} key={item.value} onClick={() => clickHandler(index)}>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	)
}
