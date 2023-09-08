import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../Input'

const fn = vitest.fn

describe('text input testing cases', () => {
	render(
		<Input
			name="name"
			value=""
			handleChange={fn}
			type="text"
			touched={false}
			label="Name"
			onBlur={fn}
		/>
	)
	const label = screen.getByLabelText('Name')
	it('should render an input with label', () => {
		expect(label).toBeInTheDocument()
		expect(label).toHaveDisplayValue('')
	})

	it('should render an input and change value after key event', () => {
		fireEvent.change(label, { target: { value: 'Shake&bake' } })
		expect(label).toHaveDisplayValue('Shake&bake')
	})
})
