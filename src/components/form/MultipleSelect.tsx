import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect'

type SelectProps = {
	items: string[]
	name: string
	label: string
	value: string[]
	id?: string
	onChange: (e: MultiSelectChangeEvent) => void
}

const MultipleSelect = ({
	items = [],
	label,
	name,
	value,
	id,
	onChange
}: SelectProps) => {
	return (
		<div className="flex-column multi-select">
			<label htmlFor={id || name}>{label}</label>
			<MultiSelect
				aria-label={label}
				value={value}
				onChange={onChange}
				options={items}
				id={id || name}
				name={name}
				display="chip"
				placeholder={label}
				className="w-full md:w-20rem"
				maxSelectedLabels={1}
			/>
		</div>
	)
}

export default MultipleSelect
