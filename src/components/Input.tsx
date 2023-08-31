import { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type InputProps = {
	name: string
	value: string
	type: 'text' | 'email'
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	error?: string
	touched?: boolean
	onBlur?: {
		(e: React.FocusEvent<unknown, Element>): void
		<T = unknown>(fieldOrEvent: T): T extends string
			? (e: unknown) => void
			: void
	}
}

const Input = ({
	name,
	value,
	handleChange,
	type,
	error,
	touched,
	onBlur
}: InputProps) => {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' }
			}}
			autoComplete="off"
		>
			<TextField
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				sx={{ input: { color: 'white', borderColor: 'white' } }}
				id="name"
				label={name}
				variant="outlined"
				error={error && touched ? true : false}
				color="primary"
				onBlur={onBlur}
			/>
		</Box>
	)
}

export default Input
