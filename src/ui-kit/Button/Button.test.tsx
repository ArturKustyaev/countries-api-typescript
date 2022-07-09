import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Test UI button', () => {

	test('render the button', () => {
		render(<Button />)
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	test('the button has a default className', () => {
		render(<Button/>)
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(screen.getByRole('button')).toHaveClass('button')
	})

	test('the button has a custom className', () => {
		render(<Button className='custom-className custom-className2'/>)
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveClass('custom-className custom-className2')
	})

	test('the button to have text', () => {
		render(<Button>test button text</Button>)
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByRole('button')).toHaveTextContent(/test button text/i)
	})

})
