import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getBreeds } from '../services/DogServices'
import MultipleSelect from '../components/form/MultipleSelect'

const Dogs = () => {
	const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
	const { data, isLoading } = useQuery({
		queryKey: ['breeds'],
		queryFn: getBreeds
	})

	console.log(data)

	const handleSelectChange = (arr: string[]) => {
		setSelectedBreeds([...arr])
	}

	if (isLoading) return <pre>Loading...</pre>

	return (
		<section>
			Dogs
			<MultipleSelect
				name="breeds"
				label="Breeds"
				value={selectedBreeds}
				items={data || []}
				onChange={handleSelectChange}
			/>
		</section>
	)
}

export default Dogs
