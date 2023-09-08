import { render, screen } from '@testing-library/react'
import MultipleSelect from '../MultipleSelect'
import user from '@testing-library/user-event'

const fn = vitest.fn

const items = ['Boxer', 'Pitbull', 'Collie']

describe('Testing cases for multiple select component', () => {
	it('Should render a select component with a 3 options', () => {
		render(
			<MultipleSelect
				items={items}
				label="breeds"
				name="breeds"
				value={[]}
				onChange={fn}
			/>
		)

		const multiSelect = screen.getByRole('listbox')
		expect(multiSelect).toBeInTheDocument()
	})
	it('Should render a select component with a 3 and select 1', async () => {
		user.setup()
		render(
			<MultipleSelect
				items={items}
				label="breeds"
				name="breeds"
				value={[]}
				onChange={fn}
			/>
		)

		const multiSelect = screen.getByRole('listbox')
		expect(multiSelect).toBeInTheDocument()

		await user.click(multiSelect)

		const option1 = screen.getByText('Boxer')
		const option2 = screen.getByText('Pitbull')
		const option3 = screen.getByText('Collie')

		expect(option1).toBeInTheDocument()
		expect(option2).toBeInTheDocument()
		expect(option3).toBeInTheDocument()
	})
})
