import { render } from '@testing-library/react'
import App from '../App'

it('Should pass as a sanity check', () => {
	render(<App />)
	expect(1).toBe(1)
})
