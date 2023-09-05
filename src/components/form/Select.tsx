import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'

type OptionsObject = {
	label: string
	value: string
}

type SelectProps = {
	onChange: (e: unknown) => void
	options: OptionsObject[] | string[]
	value: OptionsObject | string
	placeholder: string
	name: string
}

const Select = ({
	onChange,
	options,
	value,
	placeholder,
	name
}: SelectProps) => {
	const handleChange = (e: DropdownChangeEvent) => {
		onChange(e)
	}

	return (
		<div className="card flex justify-content-center">
			<Dropdown
				name={name}
				value={value}
				onChange={handleChange}
				options={options}
				placeholder={placeholder}
				className="w-full md:w-14rem"
			/>
		</div>
	)
}

export default Select
