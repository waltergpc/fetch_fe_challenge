import { render, screen } from '@testing-library/react'
import Select from '../Select'

const fn = vitest.fn

const options = [
	{ value: 'asc', label: 'From a to z' },
	{ value: 'desc', label: 'From z to a' }
]

describe('test cases for Select component', () => {
	it('should render select component with ascending as default value', () => {
		render(
			<Select
				onChange={fn}
				options={options}
				value={options[0]}
				placeholder="Sorting order"
				name="sortOrder"
				label="Breeds order"
			/>
		)

		const select = screen.getByLabelText('Breeds order')
		expect(select).toBeInTheDocument()
	})
})
