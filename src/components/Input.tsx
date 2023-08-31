import { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type InputProps = {
	name: string
	value: string
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ name, value, handleChange }: InputProps) => {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' }
			}}
			autoComplete="off"
		>
			<TextField
				name={name}
				value={value}
				onChange={handleChange}
				sx={{ input: { color: 'white', borderColor: 'white' } }}
				id="name"
				label="Name"
				variant="outlined"
				color="primary"
			/>
		</Box>
	)
}

export default Input
