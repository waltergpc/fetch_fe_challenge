import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { InputLabel, OutlinedInput } from '@mui/material'

type SelectProps = {
	items: string[]
	name: string
	label: string
	value: string[]
	onChange: (arr: string[]) => void
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
}

const MultipleSelect = ({
	items = [],
	label,
	name,
	value,
	onChange
}: SelectProps) => {
	console.log()

	const handleChange = (e: SelectChangeEvent<typeof value>) => {
		onChange(
			// On autofill we get a stringified value.
			typeof e.target.value === 'string'
				? e.target.value.split(',')
				: e.target.value
		)
	}

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
				<Select
					labelId={label}
					id={name}
					multiple
					value={value}
					onChange={handleChange}
					input={<OutlinedInput label="Tag" />}
					renderValue={(selected) => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{items.map((item) => (
						<MenuItem key={item} value={item}>
							<Checkbox checked={value.indexOf(item) > -1} />
							<ListItemText primary={item} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default MultipleSelect
