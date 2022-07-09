import classNames from 'classnames'
import { RegionType } from 'models'
import { FC, HTMLAttributes, KeyboardEvent, useState } from 'react'
import { Icon } from 'ui-kit'
import classes from './Select.module.scss'

export interface OptionType<T> {
	value: T
	label: string
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	tabIndex?: number
	options: any[]
	placeholder?: string
	onSelectItem: (value: RegionType) => void
}

export const Select: FC<Props> = ({
	className,
	options,
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
		onSelectItem(options[index].value)
		setSelectedIndex(index)
		closeHandler()
	}

	const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		e.preventDefault()

		switch (e.code) {
			case 'Space':
				setIsDropdownVisible(true)
				break
			case 'ArrowDown':
				selectedIndex !== options.length - 1 &&
					isDropdownVisible &&
					setSelectedIndex(selectedIndex + 1)
				break
			case 'ArrowUp':
				selectedIndex !== 0 && isDropdownVisible && setSelectedIndex(selectedIndex - 1)
				break
			case 'Enter':
				isDropdownVisible && clickHandler(selectedIndex)

				break
		}
	}

	const closeHandler = () => {
		setIsDropdownVisible(false)
	}

	return (
		<div
			className={classNames(classes.root, className)}
			tabIndex={0}
			role='combobox'
			onClick={toggleDropdownClickHandler}
			onKeyDown={keyDownHandler}
			onBlur={closeHandler}
			{...rest}
		>
			<div className={classNames(classes.select)}>
				<span
					className={classNames(classes.value, {
						[classes.placeholder]: selectedIndex === -1
					})}
				>
					{selectedIndex !== -1 ? options[selectedIndex].label : placeholder}
				</span>
				<Icon
					className={classNames(classes.arrow, {
						[classes.arrow_active]: isDropdownVisible
					})}
					type='ArrowDown'
				/>
			</div>
			<ul
				className={classNames(classes.dropdown, {
					[classes.dropdown__active]: isDropdownVisible
				})}
			>
				{options.map((item, index) => (
					<li
						className={classNames(classes.option_item, {
							[classes.option_item__selected]: index === selectedIndex
						})}
						key={item.value}
						onClick={() => clickHandler(index)}
					>
						{item.label}
					</li>
				))}
			</ul>
		</div>
	)
}
