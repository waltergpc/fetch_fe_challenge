import { ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type InputProps = {
	name: string
	className?: string
	width?: string
	value: string
	type: 'text' | 'email'
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	error?: string
	touched?: boolean
	label?: string
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
	label,
	onBlur,
	className,
	width
}: InputProps) => {
	return (
		<Box
			component="div"
			className="flex-column"
			sx={{
				'& > :not(style)': { m: 1, width: width ? width : '25ch' }
			}}
		>
			<TextField
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				sx={{
					input: {
						color: 'white',
						borderColor: '#7b430b'
					}
				}}
				InputLabelProps={{
					style: { color: '#fff' }
				}}
				id="name"
				label={label || name}
				variant="outlined"
				error={error && touched ? true : false}
				color="primary"
				onBlur={onBlur}
				className={className}
			/>
			{error && touched && <span className="error-span">{error}</span>}
		</Box>
	)
}

export default Input
