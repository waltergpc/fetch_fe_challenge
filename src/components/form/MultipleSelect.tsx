import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect'

type SelectProps = {
	items: string[]
	name: string
	label: string
	value: string[]
	onChange: (e: MultiSelectChangeEvent) => void
}

const MultipleSelect = ({
	items = [],
	label,
	name,
	value,
	onChange
}: SelectProps) => {
	return (
		<div className="card flex justify-content-center">
			<label>{label}</label>
			<MultiSelect
				value={value}
				onChange={onChange}
				options={items}
				name={name}
				display="chip"
				placeholder="Filter by Breed"
				className="w-full md:w-20rem"
				maxSelectedLabels={2}
			/>
		</div>
	)
}

export default MultipleSelect
