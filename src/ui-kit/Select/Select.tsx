import classNames from 'classnames'
import { FC, HTMLAttributes, useState } from 'react'
import { Icon } from 'ui-kit'
import classes from './Select.module.scss'

export type FilterValueType = 'africa' | 'america' | 'asia' | 'europe' | 'oceania' | 'all'

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

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	tabIndex?: number
	items?: Array<IFilterItem>
	placeholder?: string
	onSelectItem: (value: FilterValueType) => void
}

export const Select: FC<Props> = ({
	className,
	tabIndex = 0,
	items = orderFields,
	placeholder = 'Select something...',
	onSelectItem,
	...rest
}): JSX.Element => {
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
	const [selectedIndex, setSelectedIndex] = useState<number>(-1)

	const toggleDropdownClickHandler = () => {
		setIsDropdownVisible(!isDropdownVisible)
	}

	const clickHandler = (index: number) => {
		onSelectItem(items[index].value)
		setSelectedIndex(index)
		closeHandler()
	}

	const closeHandler = () => {
		setIsDropdownVisible(false)
	}

	const fieldStyles = classNames(classes.field, {
		[classes.active]: isDropdownVisible,
		[classes.field_focused]: isDropdownVisible
	})

	const dropdownStyles = classNames(classes.dropdown, {
		[classes.dropdown_active]: isDropdownVisible
	})

	const arrowStyles = classNames(classes.arrow, {
		[classes.arrow_active]: isDropdownVisible
	})
	const valueStyles = classNames(classes.value, {
		[classes.placeholder]: selectedIndex === -1
	})

	return (
		<div
			className={classNames(classes.select, className)}
			tabIndex={tabIndex}
			onBlur={closeHandler}
			{...rest}
		>
			<div className={fieldStyles} onClick={toggleDropdownClickHandler}>
				<span className={valueStyles}>
					{selectedIndex !== -1 ? items[selectedIndex].text : placeholder}
				</span>
				<Icon className={arrowStyles} type='ArrowDown' />
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
