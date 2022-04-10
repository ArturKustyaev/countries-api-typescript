import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Select } from './Select'
import classes from './Select.module.scss'

describe('Test UI select', () => {
	const onSelectItem = jest.fn()

	test('render select', () => {
		render(<Select onSelectItem={onSelectItem} />)
		expect(screen.getByRole('combobox')).toBeInTheDocument()
	})

    test('select has a default className', () => {
        render(<Select onSelectItem={onSelectItem} />)
		expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toHaveClass(classes.select)
    })
})
